# n2rn

`n2rn` is a command-line tool designed to help you convert a Next.js project to an Expo project for React Native. While this tool automates much of the conversion, it is still a work in progress and may not handle all edge cases perfectly. **Use this as a starting point** to adapt your web project for mobile, but expect to make additional manual adjustments as needed.

## Features

- Initializes an Expo project with a stack-based navigation, tabs, and Tailwind (via NativeWind).
- Copies the `src` and `public` directories from your Next.js project to the new Expo project.
- Converts commonly used web components to their React Native equivalents.
- Replaces events and syntax specific to web with those suitable for React Native.
- Adjusts layouts to fit the React Native stack router.
- Syncs and installs dependencies from your Next.js project.

## Requirements

- Node.js and npm
- Expo CLI (`npx expo-cli`)
- An existing Next.js project

## Installation

To install, clone this repository and install dependencies.

```bash
git clone <repository-url>
cd n2rn
npm install
```

## Usage

```bash
node convert.js <next_path> <expo_project_name>
```

- `<next_path>`: Path to your Next.js project.
- `<expo_project_name>`: Name for the new Expo project.

### Example

```bash
node convert.js ../my-nextjs-app MyExpoApp
```

This will create an Expo project called `MyExpoApp` in the current directory.

## Warning

This package is **not yet a perfect conversion tool**. It's a work in progress and may not handle all web-to-mobile scenarios automatically. It will, however, automate a significant portion of the work, helping you set up the basic structure of your Expo project. Some manual adjustments may still be necessary.

## Notes

- Review the project files after conversion to ensure all components, imports, and events work as expected.
- This tool is best suited for projects that primarily use components and patterns compatible with both web and mobile.
- Contributions to improve `n2rn` are welcome!
