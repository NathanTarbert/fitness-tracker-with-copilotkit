"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/login/page.tsx":
/*!********************************!*\
  !*** ./src/app/login/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Home = ()=>{\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for the username input\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for the password input\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for storing error messages\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (event)=>{\n        console.log({\n            handleSubmit\n        });\n        event.preventDefault(); // Prevent the default form submission behavior\n        if (!username || !password) {\n            setErrorMessage(\"Username and password are required\"); // Set an error message if fields are empty\n            return;\n        }\n        setErrorMessage(\"\"); // Clear any existing error messages\n        // Make an API request to the login endpoint\n        // const searchParams = useSearchParams();\n        // const code = searchParams.get(\"code\");\n        // console.log({ code });\n        const res = await fetch(\"/api/login\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                username,\n                password\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        if (res.ok) {\n            const { success, message } = await res.json();\n            if (success == true) {\n                router.push(\"/\");\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Username:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: username,\n                                onChange: (e)=>setUsername(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Password:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: errorMessage\n                    }, void 0, false, {\n                        fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 26\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"1G3YjDVPJbQZ5XSzAk8k19zFAx0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNvRTtBQUN4QjtBQUU1QyxNQUFNRSxPQUFpQjs7SUFDckIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFTLEtBQUssK0JBQStCO0lBQ3JGLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBUyxLQUFLLCtCQUErQjtJQUNyRixNQUFNLENBQUNPLGNBQWNDLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBUyxLQUFLLG1DQUFtQztJQUNqRyxNQUFNUyxTQUFTUiwwREFBU0E7SUFFeEIsTUFBTVMsZUFBZSxPQUFPQztRQUMxQkMsUUFBUUMsR0FBRyxDQUFDO1lBQUVIO1FBQWE7UUFDM0JDLE1BQU1HLGNBQWMsSUFBSSwrQ0FBK0M7UUFFdkUsSUFBSSxDQUFDWCxZQUFZLENBQUNFLFVBQVU7WUFDMUJHLGdCQUFnQix1Q0FBdUMsMkNBQTJDO1lBQ2xHO1FBQ0Y7UUFDQUEsZ0JBQWdCLEtBQUssb0NBQW9DO1FBRXpELDRDQUE0QztRQUM1QywwQ0FBMEM7UUFDMUMseUNBQXlDO1FBQ3pDLHlCQUF5QjtRQUV6QixNQUFNTyxNQUFNLE1BQU1DLE1BQU0sY0FBYztZQUNwQ0MsUUFBUTtZQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVqQjtnQkFBVUU7WUFBUztZQUMxQ2dCLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1FBQ0Y7UUFDQSxJQUFJTixJQUFJTyxFQUFFLEVBQUU7WUFDVixNQUFNLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFLEdBQUcsTUFBTVQsSUFBSVUsSUFBSTtZQUMzQyxJQUFJRixXQUFXLE1BQU07Z0JBQ25CZCxPQUFPaUIsSUFBSSxDQUFDO1lBQ2Q7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtDLFVBQVVwQjs7a0NBQ2QsOERBQUNpQjs7MENBQ0MsOERBQUNJOzBDQUFNOzs7Ozs7MENBQ1AsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxPQUFPL0I7Z0NBQ1BnQyxVQUFVLENBQUNDLElBQU1oQyxZQUFZZ0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUMzQ0ksUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDWDs7MENBQ0MsOERBQUNJOzBDQUFNOzs7Ozs7MENBQ1AsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxPQUFPN0I7Z0NBQ1A4QixVQUFVLENBQUNDLElBQU05QixZQUFZOEIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUMzQ0ksUUFBUTs7Ozs7Ozs7Ozs7O29CQUdYL0IsOEJBQWdCLDhEQUFDZ0M7a0NBQUdoQzs7Ozs7O2tDQUNyQiw4REFBQ2lDO3dCQUFPUCxNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUI7R0EvRE0vQjs7UUFJV0Qsc0RBQVNBOzs7S0FKcEJDO0FBaUVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3g/ZmM2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBGb3JtRXZlbnQsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTsgLy8gU3RhdGUgZm9yIHRoZSB1c2VybmFtZSBpbnB1dFxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7IC8vIFN0YXRlIGZvciB0aGUgcGFzc3dvcmQgaW5wdXRcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7IC8vIFN0YXRlIGZvciBzdG9yaW5nIGVycm9yIG1lc3NhZ2VzXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBjb25zb2xlLmxvZyh7IGhhbmRsZVN1Ym1pdCB9KTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvclxuXG4gICAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIlVzZXJuYW1lIGFuZCBwYXNzd29yZCBhcmUgcmVxdWlyZWRcIik7IC8vIFNldCBhbiBlcnJvciBtZXNzYWdlIGlmIGZpZWxkcyBhcmUgZW1wdHlcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpOyAvLyBDbGVhciBhbnkgZXhpc3RpbmcgZXJyb3IgbWVzc2FnZXNcblxuICAgIC8vIE1ha2UgYW4gQVBJIHJlcXVlc3QgdG8gdGhlIGxvZ2luIGVuZHBvaW50XG4gICAgLy8gY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gICAgLy8gY29uc3QgY29kZSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJjb2RlXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKHsgY29kZSB9KTtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9sb2dpblwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICBjb25zdCB7IHN1Y2Nlc3MsIG1lc3NhZ2UgfSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBpZiAoc3VjY2VzcyA9PSB0cnVlKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkxvZ2luPC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5Vc2VybmFtZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2Vycm9yTWVzc2FnZSAmJiA8cD57ZXJyb3JNZXNzYWdlfTwvcD59XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiSG9tZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIm9rIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJqc29uIiwicHVzaCIsImRpdiIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInJlcXVpcmVkIiwicCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});