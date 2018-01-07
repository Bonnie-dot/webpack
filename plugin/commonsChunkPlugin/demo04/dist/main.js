webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports) {

/**
 * @User:Bonnie
 * @Date:2018/1/5
 * @Describe:
 */
var chunk2=2;
console.log(chunk2);
exports.chunk2=chunk2;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @User:Bonnie
 * @Date:2018/1/5
 * @Describe:
 */
__webpack_require__(0);
var chunk1=1;
exports.chunk1=chunk1;
console.log(chunk1);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @User:Bonnie
 * @Date:2018/1/5
 * @Describe:
 */
__webpack_require__(1);
__webpack_require__(0);
console.log('main');

/***/ })
],[2]);