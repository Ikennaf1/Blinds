/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ConstructDarkModeStyle.js":
/*!***************************************!*\
  !*** ./src/ConstructDarkModeStyle.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ConstructDarkModeStyle)\n/* harmony export */ });\n/* harmony import */ var _blinds_style_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blinds.style.json */ \"./blinds.style.json\");\n\r\n\r\n/**\r\n * Constructs the data given in the blinds.style.json to CSS\r\n * @param: `NULL`\r\n * @returns `string`: The constructed CSS\r\n */\r\nfunction ConstructDarkModeStyle()\r\n{\r\n    let style = \"\";\r\n    let temp = \"\";\r\n    let value = \"\";\r\n    Object.keys(_blinds_style_json__WEBPACK_IMPORTED_MODULE_0__).map((selector) => {\r\n        temp = `\\n${selector} {\\n`;\r\n        style += temp;\r\n        Object.keys(_blinds_style_json__WEBPACK_IMPORTED_MODULE_0__[selector]).map((property) => {\r\n            value = _blinds_style_json__WEBPACK_IMPORTED_MODULE_0__[selector][property];\r\n            temp = `\\t${property}: ${value} !important; \\n`;\r\n            style += temp;\r\n        });\r\n        style += \"}\\n\";\r\n    });\r\n    console.log(style);\r\n    return style;\r\n}\r\n\n\n//# sourceURL=webpack://blinds/./src/ConstructDarkModeStyle.js?");

/***/ }),

/***/ "./src/IsDarkMode.js":
/*!***************************!*\
  !*** ./src/IsDarkMode.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IsDarkMode)\n/* harmony export */ });\n/**\r\n * Checks if the browser is set to dark mode\r\n * @param: `NULL`\r\n * @returns `boolean`: `true` if browser is in dark mode, else `false`\r\n */\r\nfunction IsDarkMode()\r\n{\r\n    let mediaQueryObj = window.matchMedia('(prefers-color-scheme: dark)');\r\n    let isDarkMode = mediaQueryObj.matches;\r\n\r\n    return isDarkMode;\r\n}\n\n//# sourceURL=webpack://blinds/./src/IsDarkMode.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _IsDarkMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IsDarkMode */ \"./src/IsDarkMode.js\");\n/* harmony import */ var _ConstructDarkModeStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConstructDarkModeStyle */ \"./src/ConstructDarkModeStyle.js\");\n\r\n\r\n\r\n(0,_ConstructDarkModeStyle__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://blinds/./src/index.js?");

/***/ }),

/***/ "./blinds.style.json":
/*!***************************!*\
  !*** ./blinds.style.json ***!
  \***************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"div\":{\"background-color\":\"red\",\"border-color\":\"gray\",\"color\":\"#f7f8fc\"},\".class\":{\"background-color\":\"green\"},\"#id\":{\"background-color\":\"blue\"}}');\n\n//# sourceURL=webpack://blinds/./blinds.style.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;