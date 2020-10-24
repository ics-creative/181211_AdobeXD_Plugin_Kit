module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 19:0-14 */
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const scenegraph_1 = __webpack_require__(/*! scenegraph */ "scenegraph");
function drawItem(selection) {
    // [3]
    const line = new scenegraph_1.Line(); // [4.i]
    line.setStartEnd(
    // [4.ii]
    0, 0, 100, 100);
    line.strokeEnabled = true; // [4.iii]
    line.stroke = new scenegraph_1.Color("#FF0000"); // [4.iv]
    line.strokeWidth = 10; // [4.v]
    line.strokeEndCaps = scenegraph_1.GraphicNode.STROKE_CAP_ROUND; // [4.v]
    if (selection.editContext.isContainer) {
        selection.editContext.addChild(line);
    }
}
// メニューとして出力する
module.exports = {
    commands: {
        // コマンドが押されたらこの関数を呼び出す
        menuCommand: drawItem,
    },
};


/***/ }),

/***/ "scenegraph":
/*!*****************************!*\
  !*** external "scenegraph" ***!
  \*****************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("scenegraph");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
;