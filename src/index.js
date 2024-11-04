#!/usr/bin/env node

import fs, {promises} from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { componentMapping, eventMapping, otherReplacements } from './mappings.js';

async function convertNextToExpo(nextPath, expoProjectName) {
  try {
    console.log("Initializing Expo project...");
    execSync(`npx create-expo-stack@latest ${expoProjectName} --expo-router --tabs --nativewind`, { stdio: 'inherit' });
    const expoPath = path.resolve(expoProjectName);

    console.log("Copying src and public directories...");
    const srcPath = path.join(nextPath, 'src');
    const publicPath = path.join(nextPath, 'public');
    if (fs.existsSync(srcPath)) copyDir(srcPath, path.join(expoPath));
    if (fs.existsSync(publicPath)) copyDir(publicPath, path.join(expoPath, 'assets'));

    console.log("Renaming files...");
    renameFiles(path.join(expoPath));

    console.log("Replacing web components with React Native components...");
    await replaceMappings(expoPath);

    console.log("Replacing @ symbol in paths...");
    await replaceAtSymbol(expoPath);

    console.log("Syncing dependencies...");
    await syncDependencies(nextPath, expoProjectName);

    console.log("Modifying layouts...");
    await modifyLayouts(expoPath);

    console.log("Conversion complete! Test your Expo project to ensure functionality.");
  } catch (error) {
    console.error("Error during conversion:", error);
  }
}

async function addAtTopOfFile(filePath, content) {
  const data = fs.readFileSync(filePath, 'utf8');
  fs.writeFileSync(filePath, content + "\n" + data);
}
async function modifyLayouts(expoPath) {
  const files = getFiles(expoPath, '_layout.tsx');
  for (const file of files) {
    await replaceInFile(file, '{children}', '<Stack/>');
    await replaceInFile(file, `{
  children,
}: Readonly<{
  children: React.ReactNode;
}>`, '');
    await addAtTopOfFile(file, "import { Stack } from 'expo-router';");
  }
}
async function syncDependencies(nextPath, expoProjectName) {
  const webPackageJson = JSON.parse(fs.readFileSync(`${nextPath}/package.json`, 'utf8'));
  const expoPackageJson = JSON.parse(fs.readFileSync(`${expoProjectName}/package.json`, 'utf8'));

  const webDependencies = webPackageJson.dependencies || {};
  const expoDependencies = expoPackageJson.dependencies || {};

  const missingDependencies = Object.keys(webDependencies).filter(dep => !expoDependencies[dep]);

  if (missingDependencies.length > 0) {
    console.log(`Installing missing dependencies in expo: ${missingDependencies.join(', ')}`);
    execSync(`npm install --prefix ${expoProjectName} ${missingDependencies.map(dep => `${dep}@${webDependencies[dep]}`).join(' ')}`, { stdio: 'inherit' });
  } else {
    console.log("All dependencies from `web` are already present in `expo`.");
  }
}

async function replaceAtSymbol(projectPath) {
    const files = getFiles(projectPath, '.tsx');
    files.push(...getFiles(projectPath, '.ts'));

    for (const file of files) {
        const data = fs.readFileSync(file, 'utf8');
        const updatedData = data.replace(/@\//g, ''); 
        fs.writeFileSync(file, updatedData);
    }
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    entry.isDirectory() ? copyDir(srcPath, destPath) : fs.copyFileSync(srcPath, destPath);
  }
}

function renameFiles(appPath) {
  const filesToRename = [
    { oldName: 'not-found.tsx', newName: '+not-found.tsx' },
    { oldName: 'layout.tsx', newName: '_layout.tsx' },
    { oldName: 'page.tsx', newName: 'index.tsx' },
  ];

  function recursiveRename(dirPath) {
    fs.readdirSync(dirPath, { withFileTypes: true }).forEach((entry) => {
      const entryPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        recursiveRename(entryPath);
      } else {
        const renameItem = filesToRename.find((item) => entry.name === item.oldName);
        if (renameItem) {
          const newFilePath = path.join(dirPath, renameItem.newName);
          fs.renameSync(entryPath, newFilePath);
        }
      }
    });
  }

  recursiveRename(appPath);
}

async function replaceMappings(projectPath) {
  const files = getFiles(projectPath, '.tsx');

  for (const file of files) {

    for (const [webComponent, nativeComponent] of Object.entries(componentMapping)) {
      await replaceInFile(file, `<${webComponent}`, `<${nativeComponent}`);
      await replaceInFile(file, `</${webComponent}>`, `</${nativeComponent}>`);
    }

    await replaceUnmappedTagsWithView(file);

    for (const [webEvent, nativeEvent] of Object.entries(eventMapping)) {
      await replaceInFile(file, webEvent, nativeEvent);
    }

    for (const [orig, repl] of Object.entries(otherReplacements)) {
      await replaceInFile(file, orig, repl);
    }

    await addRNImports(file);
  }
}

async function replaceUnmappedTagsWithView(filePath) {
  const lowercaseTagPattern = /<\/?([a-z]+)(\s|>)/g;
  const data = fs.readFileSync(filePath, 'utf8');

  const updatedData = data.replace(lowercaseTagPattern, (match, tagName) => {
    if (tagName === 'boolean' || tagName === 'number' || tagName === "string" || tagName === "typeof") return match;

    return componentMapping[tagName] ? match : match.replace(tagName, 'View');
  });

  fs.writeFileSync(filePath, updatedData);
}


async function replaceInFile(filePath, from, to) {
  try {
    let content = await promises.readFile(filePath, 'utf8');
    
    // const occurrences = (content.match(new RegExp(from, 'g')) || []).length;

    const updatedContent = content.replace(new RegExp(from, 'g'), to);

    await promises.writeFile(filePath, updatedContent, 'utf-8');
  } catch (error) {
    console.error(`Error replacing in ${filePath}:`, error);
  }
}

async function addRNImports(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
  
    const requiredComponents = new Set();
    for (const component of Object.values(componentMapping)) {
      const regex = new RegExp(`<${component}`, 'g');
      if (regex.test(data)) requiredComponents.add(component);
    }
  
    if (requiredComponents.size > 0) {
      const existingImports = data.match(/import {([^}]+)} from 'react-native';/);
      const importedComponents = existingImports
        ? new Set(existingImports[1].split(',').map(comp => comp.trim()))
        : new Set();
  
      const newComponents = [...requiredComponents].filter(comp => !importedComponents.has(comp));
  
      if (newComponents.length > 0) {
        const importStatement = `import { ${newComponents.join(', ')} } from 'react-native';\n`;
  
        const updatedData = existingImports
          ? data.replace(existingImports[0], `import { ${[...importedComponents, ...newComponents].join(', ')} } from 'react-native';`)
          : importStatement + data;
  
        fs.writeFileSync(filePath, updatedData);
      }
    }
  }
  

function getFiles(dir, ext) {
  let files = [];
  fs.readdirSync(dir, { withFileTypes: true }).forEach((file) => {
    const res = path.resolve(dir, file.name);
    if (file.isDirectory()) {
      files = files.concat(getFiles(res, ext));
    } else if (res.endsWith(ext)) {
        if(!res.includes('node_modules'))
            files.push(res);
    }
  });
  return files;
}

const nextPath = process.argv[2];
const expoProjectName = process.argv[3];
if (!nextPath || !expoProjectName) {
  console.log("Usage: node convert.js <next_path> <expo_project_name>");
} else {
  convertNextToExpo(nextPath, expoProjectName);
}
