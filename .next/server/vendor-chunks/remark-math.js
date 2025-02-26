"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/remark-math";
exports.ids = ["vendor-chunks/remark-math"];
exports.modules = {

/***/ "(ssr)/./node_modules/remark-math/index.js":
/*!*******************************************!*\
  !*** ./node_modules/remark-math/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ remarkMath)\n/* harmony export */ });\n/* harmony import */ var micromark_extension_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-extension-math */ \"(ssr)/./node_modules/micromark-extension-math/dev/lib/syntax.js\");\n/* harmony import */ var mdast_util_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdast-util-math */ \"(ssr)/./node_modules/mdast-util-math/lib/index.js\");\n/**\n * @typedef {import('mdast').Root} Root\n * @typedef {import('mdast-util-math').ToOptions} Options\n *\n * @typedef {import('mdast-util-math')} DoNotTouchAsThisImportIncludesMathInTree\n */\n\n\n\n\n/**\n * Plugin to support math.\n *\n * @type {import('unified').Plugin<[Options?] | void[], Root, Root>}\n */\nfunction remarkMath(options = {}) {\n  const data = this.data()\n\n  add('micromarkExtensions', (0,micromark_extension_math__WEBPACK_IMPORTED_MODULE_0__.math)(options))\n  add('fromMarkdownExtensions', (0,mdast_util_math__WEBPACK_IMPORTED_MODULE_1__.mathFromMarkdown)())\n  add('toMarkdownExtensions', (0,mdast_util_math__WEBPACK_IMPORTED_MODULE_1__.mathToMarkdown)(options))\n\n  /**\n   * @param {string} field\n   * @param {unknown} value\n   */\n  function add(field, value) {\n    const list = /** @type {unknown[]} */ (\n      // Other extensions\n      /* c8 ignore next 2 */\n      data[field] ? data[field] : (data[field] = [])\n    )\n\n    list.push(value)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVtYXJrLW1hdGgvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHFDQUFxQztBQUNsRDtBQUNBLGFBQWEsMkJBQTJCO0FBQ3hDOztBQUU2QztBQUNtQjs7QUFFaEU7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ2UsZ0NBQWdDO0FBQy9DOztBQUVBLDZCQUE2Qiw4REFBSTtBQUNqQyxnQ0FBZ0MsaUVBQWdCO0FBQ2hELDhCQUE4QiwrREFBYzs7QUFFNUM7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQSw0QkFBNEIsV0FBVztBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZW4tdWkvLi9ub2RlX21vZHVsZXMvcmVtYXJrLW1hdGgvaW5kZXguanM/N2IwYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuUm9vdH0gUm9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1tYXRoJykuVG9PcHRpb25zfSBPcHRpb25zXG4gKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1tYXRoJyl9IERvTm90VG91Y2hBc1RoaXNJbXBvcnRJbmNsdWRlc01hdGhJblRyZWVcbiAqL1xuXG5pbXBvcnQge21hdGh9IGZyb20gJ21pY3JvbWFyay1leHRlbnNpb24tbWF0aCdcbmltcG9ydCB7bWF0aEZyb21NYXJrZG93biwgbWF0aFRvTWFya2Rvd259IGZyb20gJ21kYXN0LXV0aWwtbWF0aCdcblxuLyoqXG4gKiBQbHVnaW4gdG8gc3VwcG9ydCBtYXRoLlxuICpcbiAqIEB0eXBlIHtpbXBvcnQoJ3VuaWZpZWQnKS5QbHVnaW48W09wdGlvbnM/XSB8IHZvaWRbXSwgUm9vdCwgUm9vdD59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbWFya01hdGgob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEoKVxuXG4gIGFkZCgnbWljcm9tYXJrRXh0ZW5zaW9ucycsIG1hdGgob3B0aW9ucykpXG4gIGFkZCgnZnJvbU1hcmtkb3duRXh0ZW5zaW9ucycsIG1hdGhGcm9tTWFya2Rvd24oKSlcbiAgYWRkKCd0b01hcmtkb3duRXh0ZW5zaW9ucycsIG1hdGhUb01hcmtkb3duKG9wdGlvbnMpKVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRcbiAgICogQHBhcmFtIHt1bmtub3dufSB2YWx1ZVxuICAgKi9cbiAgZnVuY3Rpb24gYWRkKGZpZWxkLCB2YWx1ZSkge1xuICAgIGNvbnN0IGxpc3QgPSAvKiogQHR5cGUge3Vua25vd25bXX0gKi8gKFxuICAgICAgLy8gT3RoZXIgZXh0ZW5zaW9uc1xuICAgICAgLyogYzggaWdub3JlIG5leHQgMiAqL1xuICAgICAgZGF0YVtmaWVsZF0gPyBkYXRhW2ZpZWxkXSA6IChkYXRhW2ZpZWxkXSA9IFtdKVxuICAgIClcblxuICAgIGxpc3QucHVzaCh2YWx1ZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/remark-math/index.js\n");

/***/ })

};
;