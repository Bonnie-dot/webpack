/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @User:Bonnie
 * @Date:2018/1/14
 * @Describe:
 */
var img=document.createElement('img');
img.src=__webpack_require__(1);
document.body.appendChild(img);
var img2=document.createElement('img');
img2.src=__webpack_require__(2);
document.body.appendChild(img2);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8ac49ee5afdad501a97a1909095df89a.jpg";

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAAXNSR0IArs4c6QAAAUpJREFUKBV9kr1KA1EQRrPRgDEGsUiKYCPaBAKCpbW12hjyDIL4AD6BhY34AmKVxlQp0lgINuYFbAQRIoI/lYioyc2Z3Zkl9y7swGFmvvlmWHJTKOSEc+4KbnIs/ghzE6qmUn+CxIJo5Cps29zLDNowgb4NqD9Awg6cJa07Nk+cEVfhS4eHNqQPD+yr55+8aT75tAsddFORAs07IDO0c/X2Ui/Cq4prqZiYT9EvA20Z7UepyMUVkBjNGvNqvMN4w7lWEWNFzZO8pWA21n5RvqAEv3qxFhgzLb55+FZ/oxhF0R+uW3V2MhtZYRepDA/svsRjru3pRXnKjexOojCrgf3g6XPbkZ4eeSMfhEfQduBZPXfkkudBWIKBGiSJ+Rq68AgW9xR1b9kaBnNwBCMI4x3hBOK/te1EVsxmTKJvwTrIUz/BkB/Nno82iSmCOHW4oGcblwAAAABJRU5ErkJggg=="

/***/ })
/******/ ]);