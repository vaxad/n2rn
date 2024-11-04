"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _fs = _interopRequireWildcard(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _child_process = require("child_process");
var _mappings = require("./mappings.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function convertNextToExpo(_x, _x2) {
  return _convertNextToExpo.apply(this, arguments);
}
function _convertNextToExpo() {
  _convertNextToExpo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(nextPath, expoProjectName) {
    var expoPath, srcPath, publicPath;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log("Initializing Expo project...");
          (0, _child_process.execSync)("npx create-expo-stack@latest ".concat(expoProjectName, " --expo-router --tabs --nativewind"), {
            stdio: 'inherit'
          });
          expoPath = _path["default"].resolve(expoProjectName);
          console.log("Copying src and public directories...");
          srcPath = _path["default"].join(nextPath, 'src');
          publicPath = _path["default"].join(nextPath, 'public');
          if (_fs["default"].existsSync(srcPath)) copyDir(srcPath, _path["default"].join(expoPath));
          if (_fs["default"].existsSync(publicPath)) copyDir(publicPath, _path["default"].join(expoPath, 'assets'));
          console.log("Renaming files...");
          renameFiles(_path["default"].join(expoPath));
          console.log("Replacing web components with React Native components...");
          _context.next = 14;
          return replaceMappings(expoPath);
        case 14:
          console.log("Replacing @ symbol in paths...");
          _context.next = 17;
          return replaceAtSymbol(expoPath);
        case 17:
          console.log("Syncing dependencies...");
          _context.next = 20;
          return syncDependencies(nextPath, expoProjectName);
        case 20:
          console.log("Modifying layouts...");
          _context.next = 23;
          return modifyLayouts(expoPath);
        case 23:
          console.log("Conversion complete! Test your Expo project to ensure functionality.");
          _context.next = 29;
          break;
        case 26:
          _context.prev = 26;
          _context.t0 = _context["catch"](0);
          console.error("Error during conversion:", _context.t0);
        case 29:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 26]]);
  }));
  return _convertNextToExpo.apply(this, arguments);
}
function addAtTopOfFile(_x3, _x4) {
  return _addAtTopOfFile.apply(this, arguments);
}
function _addAtTopOfFile() {
  _addAtTopOfFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(filePath, content) {
    var data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          data = _fs["default"].readFileSync(filePath, 'utf8');
          _fs["default"].writeFileSync(filePath, content + "\n" + data);
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _addAtTopOfFile.apply(this, arguments);
}
function modifyLayouts(_x5) {
  return _modifyLayouts.apply(this, arguments);
}
function _modifyLayouts() {
  _modifyLayouts = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(expoPath) {
    var files, _iterator2, _step2, file;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          files = getFiles(expoPath, '_layout.tsx');
          _iterator2 = _createForOfIteratorHelper(files);
          _context3.prev = 2;
          _iterator2.s();
        case 4:
          if ((_step2 = _iterator2.n()).done) {
            _context3.next = 14;
            break;
          }
          file = _step2.value;
          _context3.next = 8;
          return replaceInFile(file, '{children}', '<Stack/>');
        case 8:
          _context3.next = 10;
          return replaceInFile(file, "{\n  children,\n}: Readonly<{\n  children: React.ReactNode;\n}>", '');
        case 10:
          _context3.next = 12;
          return addAtTopOfFile(file, "import { Stack } from 'expo-router';");
        case 12:
          _context3.next = 4;
          break;
        case 14:
          _context3.next = 19;
          break;
        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](2);
          _iterator2.e(_context3.t0);
        case 19:
          _context3.prev = 19;
          _iterator2.f();
          return _context3.finish(19);
        case 22:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 16, 19, 22]]);
  }));
  return _modifyLayouts.apply(this, arguments);
}
function syncDependencies(_x6, _x7) {
  return _syncDependencies.apply(this, arguments);
}
function _syncDependencies() {
  _syncDependencies = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(nextPath, expoProjectName) {
    var webPackageJson, expoPackageJson, webDependencies, expoDependencies, missingDependencies;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          webPackageJson = JSON.parse(_fs["default"].readFileSync("".concat(nextPath, "/package.json"), 'utf8'));
          expoPackageJson = JSON.parse(_fs["default"].readFileSync("".concat(expoProjectName, "/package.json"), 'utf8'));
          webDependencies = webPackageJson.dependencies || {};
          expoDependencies = expoPackageJson.dependencies || {};
          missingDependencies = Object.keys(webDependencies).filter(function (dep) {
            return !expoDependencies[dep];
          });
          if (missingDependencies.length > 0) {
            console.log("Installing missing dependencies in expo: ".concat(missingDependencies.join(', ')));
            (0, _child_process.execSync)("npm install --prefix ".concat(expoProjectName, " ").concat(missingDependencies.map(function (dep) {
              return "".concat(dep, "@").concat(webDependencies[dep]);
            }).join(' ')), {
              stdio: 'inherit'
            });
          } else {
            console.log("All dependencies from `web` are already present in `expo`.");
          }
        case 6:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _syncDependencies.apply(this, arguments);
}
function replaceAtSymbol(_x8) {
  return _replaceAtSymbol.apply(this, arguments);
}
function _replaceAtSymbol() {
  _replaceAtSymbol = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(projectPath) {
    var files, _iterator3, _step3, file, data, updatedData;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          files = getFiles(projectPath, '.tsx');
          files.push.apply(files, _toConsumableArray(getFiles(projectPath, '.ts')));
          _iterator3 = _createForOfIteratorHelper(files);
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              file = _step3.value;
              data = _fs["default"].readFileSync(file, 'utf8');
              updatedData = data.replace(/@\//g, '');
              _fs["default"].writeFileSync(file, updatedData);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _replaceAtSymbol.apply(this, arguments);
}
function copyDir(src, dest) {
  _fs["default"].mkdirSync(dest, {
    recursive: true
  });
  var entries = _fs["default"].readdirSync(src, {
    withFileTypes: true
  });
  var _iterator = _createForOfIteratorHelper(entries),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var entry = _step.value;
      var srcPath = _path["default"].join(src, entry.name);
      var destPath = _path["default"].join(dest, entry.name);
      entry.isDirectory() ? copyDir(srcPath, destPath) : _fs["default"].copyFileSync(srcPath, destPath);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function renameFiles(appPath) {
  var filesToRename = [{
    oldName: 'not-found.tsx',
    newName: '+not-found.tsx'
  }, {
    oldName: 'layout.tsx',
    newName: '_layout.tsx'
  }, {
    oldName: 'page.tsx',
    newName: 'index.tsx'
  }];
  function recursiveRename(dirPath) {
    _fs["default"].readdirSync(dirPath, {
      withFileTypes: true
    }).forEach(function (entry) {
      var entryPath = _path["default"].join(dirPath, entry.name);
      if (entry.isDirectory()) {
        recursiveRename(entryPath);
      } else {
        var renameItem = filesToRename.find(function (item) {
          return entry.name === item.oldName;
        });
        if (renameItem) {
          var newFilePath = _path["default"].join(dirPath, renameItem.newName);
          _fs["default"].renameSync(entryPath, newFilePath);
        }
      }
    });
  }
  recursiveRename(appPath);
}
function replaceMappings(_x9) {
  return _replaceMappings.apply(this, arguments);
}
function _replaceMappings() {
  _replaceMappings = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(projectPath) {
    var files, _iterator4, _step4, file, _i, _Object$entries, _Object$entries$_i, webComponent, nativeComponent, _i2, _Object$entries2, _Object$entries2$_i, webEvent, nativeEvent, _i3, _Object$entries3, _Object$entries3$_i, orig, repl;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          files = getFiles(projectPath, '.tsx');
          _iterator4 = _createForOfIteratorHelper(files);
          _context6.prev = 2;
          _iterator4.s();
        case 4:
          if ((_step4 = _iterator4.n()).done) {
            _context6.next = 38;
            break;
          }
          file = _step4.value;
          _i = 0, _Object$entries = Object.entries(_mappings.componentMapping);
        case 7:
          if (!(_i < _Object$entries.length)) {
            _context6.next = 16;
            break;
          }
          _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), webComponent = _Object$entries$_i[0], nativeComponent = _Object$entries$_i[1];
          _context6.next = 11;
          return replaceInFile(file, "<".concat(webComponent), "<".concat(nativeComponent));
        case 11:
          _context6.next = 13;
          return replaceInFile(file, "</".concat(webComponent, ">"), "</".concat(nativeComponent, ">"));
        case 13:
          _i++;
          _context6.next = 7;
          break;
        case 16:
          _context6.next = 18;
          return replaceUnmappedTagsWithView(file);
        case 18:
          _i2 = 0, _Object$entries2 = Object.entries(_mappings.eventMapping);
        case 19:
          if (!(_i2 < _Object$entries2.length)) {
            _context6.next = 26;
            break;
          }
          _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), webEvent = _Object$entries2$_i[0], nativeEvent = _Object$entries2$_i[1];
          _context6.next = 23;
          return replaceInFile(file, webEvent, nativeEvent);
        case 23:
          _i2++;
          _context6.next = 19;
          break;
        case 26:
          _i3 = 0, _Object$entries3 = Object.entries(_mappings.otherReplacements);
        case 27:
          if (!(_i3 < _Object$entries3.length)) {
            _context6.next = 34;
            break;
          }
          _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2), orig = _Object$entries3$_i[0], repl = _Object$entries3$_i[1];
          _context6.next = 31;
          return replaceInFile(file, orig, repl);
        case 31:
          _i3++;
          _context6.next = 27;
          break;
        case 34:
          _context6.next = 36;
          return addRNImports(file);
        case 36:
          _context6.next = 4;
          break;
        case 38:
          _context6.next = 43;
          break;
        case 40:
          _context6.prev = 40;
          _context6.t0 = _context6["catch"](2);
          _iterator4.e(_context6.t0);
        case 43:
          _context6.prev = 43;
          _iterator4.f();
          return _context6.finish(43);
        case 46:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[2, 40, 43, 46]]);
  }));
  return _replaceMappings.apply(this, arguments);
}
function replaceUnmappedTagsWithView(_x10) {
  return _replaceUnmappedTagsWithView.apply(this, arguments);
}
function _replaceUnmappedTagsWithView() {
  _replaceUnmappedTagsWithView = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(filePath) {
    var lowercaseTagPattern, data, updatedData;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          lowercaseTagPattern = /<\/?([a-z]+)(\s|>)/g;
          data = _fs["default"].readFileSync(filePath, 'utf8');
          updatedData = data.replace(lowercaseTagPattern, function (match, tagName) {
            if (tagName === 'boolean' || tagName === 'number' || tagName === "string" || tagName === "typeof") return match;
            return _mappings.componentMapping[tagName] ? match : match.replace(tagName, 'View');
          });
          _fs["default"].writeFileSync(filePath, updatedData);
        case 4:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _replaceUnmappedTagsWithView.apply(this, arguments);
}
function replaceInFile(_x11, _x12, _x13) {
  return _replaceInFile.apply(this, arguments);
}
function _replaceInFile() {
  _replaceInFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(filePath, from, to) {
    var content, updatedContent;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return _fs.promises.readFile(filePath, 'utf8');
        case 3:
          content = _context8.sent;
          // const occurrences = (content.match(new RegExp(from, 'g')) || []).length;
          updatedContent = content.replace(new RegExp(from, 'g'), to);
          _context8.next = 7;
          return _fs.promises.writeFile(filePath, updatedContent, 'utf-8');
        case 7:
          _context8.next = 12;
          break;
        case 9:
          _context8.prev = 9;
          _context8.t0 = _context8["catch"](0);
          console.error("Error replacing in ".concat(filePath, ":"), _context8.t0);
        case 12:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 9]]);
  }));
  return _replaceInFile.apply(this, arguments);
}
function addRNImports(_x14) {
  return _addRNImports.apply(this, arguments);
}
function _addRNImports() {
  _addRNImports = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(filePath) {
    var data, requiredComponents, _i4, _Object$values, component, regex, existingImports, importedComponents, newComponents, importStatement, updatedData;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          data = _fs["default"].readFileSync(filePath, 'utf8');
          requiredComponents = new Set();
          for (_i4 = 0, _Object$values = Object.values(_mappings.componentMapping); _i4 < _Object$values.length; _i4++) {
            component = _Object$values[_i4];
            regex = new RegExp("<".concat(component), 'g');
            if (regex.test(data)) requiredComponents.add(component);
          }
          if (requiredComponents.size > 0) {
            existingImports = data.match(/import {([^}]+)} from 'react-native';/);
            importedComponents = existingImports ? new Set(existingImports[1].split(',').map(function (comp) {
              return comp.trim();
            })) : new Set();
            newComponents = _toConsumableArray(requiredComponents).filter(function (comp) {
              return !importedComponents.has(comp);
            });
            if (newComponents.length > 0) {
              importStatement = "import { ".concat(newComponents.join(', '), " } from 'react-native';\n");
              updatedData = existingImports ? data.replace(existingImports[0], "import { ".concat([].concat(_toConsumableArray(importedComponents), _toConsumableArray(newComponents)).join(', '), " } from 'react-native';")) : importStatement + data;
              _fs["default"].writeFileSync(filePath, updatedData);
            }
          }
        case 4:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _addRNImports.apply(this, arguments);
}
function getFiles(dir, ext) {
  var files = [];
  _fs["default"].readdirSync(dir, {
    withFileTypes: true
  }).forEach(function (file) {
    var res = _path["default"].resolve(dir, file.name);
    if (file.isDirectory()) {
      files = files.concat(getFiles(res, ext));
    } else if (res.endsWith(ext)) {
      if (!res.includes('node_modules')) files.push(res);
    }
  });
  return files;
}
var nextPath = process.argv[2];
var expoProjectName = process.argv[3];
if (!nextPath || !expoProjectName) {
  console.log("Usage: node convert.js <next_path> <expo_project_name>");
} else {
  convertNextToExpo(nextPath, expoProjectName);
}