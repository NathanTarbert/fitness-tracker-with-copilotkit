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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Home = ()=>{\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for the username input\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for the password input\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for storing error messages\n    const handleSubmit = async (event)=>{\n        console.log({\n            handleSubmit\n        });\n        event.preventDefault(); // Prevent the default form submission behavior\n        if (!username || !password) {\n            setErrorMessage(\"Username and password are required\"); // Set an error message if fields are empty\n            return;\n        }\n        setErrorMessage(\"\"); // Clear any existing error messages\n        // Make an API request to the login endpoint\n        // const searchParams = useSearchParams();\n        // const code = searchParams.get(\"code\");\n        // console.log({ code });\n        const res = await fetch(\"/api/login\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                test: \"test\"\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        if (res.ok) {\n            const data = await res.json();\n            console.log(data);\n        }\n    // useEffect(() => {\n    //   fetchToken();\n    // }, [fetchToken]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Username:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: username,\n                                onChange: (e)=>setUsername(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Password:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: errorMessage\n                    }, void 0, false, {\n                        fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 26\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathantarbert/Desktop/Code-Projects/interactive-sales-dashboard-with-copilokit/src/app/login/page.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"5oC8564e3UV+5aplqyMw1g1EJeU=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ29FO0FBR3BFLE1BQU1DLE9BQWlCOztJQUNyQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQVMsS0FBSywrQkFBK0I7SUFDckYsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFTLEtBQUssK0JBQStCO0lBQ3JGLE1BQU0sQ0FBQ00sY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFTLEtBQUssbUNBQW1DO0lBRWpHLE1BQU1RLGVBQWUsT0FBT0M7UUFDMUJDLFFBQVFDLEdBQUcsQ0FBQztZQUFFSDtRQUFhO1FBQzNCQyxNQUFNRyxjQUFjLElBQUksK0NBQStDO1FBRXZFLElBQUksQ0FBQ1YsWUFBWSxDQUFDRSxVQUFVO1lBQzFCRyxnQkFBZ0IsdUNBQXVDLDJDQUEyQztZQUNsRztRQUNGO1FBQ0FBLGdCQUFnQixLQUFLLG9DQUFvQztRQUV6RCw0Q0FBNEM7UUFDNUMsMENBQTBDO1FBQzFDLHlDQUF5QztRQUN6Qyx5QkFBeUI7UUFFekIsTUFBTU0sTUFBTSxNQUFNQyxNQUFNLGNBQWM7WUFDcENDLFFBQVE7WUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxNQUFNO1lBQU87WUFDcENDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1FBQ0Y7UUFDQSxJQUFJUCxJQUFJUSxFQUFFLEVBQUU7WUFDVixNQUFNQyxPQUFPLE1BQU1ULElBQUlVLElBQUk7WUFDM0JiLFFBQVFDLEdBQUcsQ0FBQ1c7UUFDZDtJQUVBLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3RCO0lBRUEscUJBQ0UsOERBQUNFOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtDLFVBQVVuQjs7a0NBQ2QsOERBQUNnQjs7MENBQ0MsOERBQUNJOzBDQUFNOzs7Ozs7MENBQ1AsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxPQUFPN0I7Z0NBQ1A4QixVQUFVLENBQUNDLElBQU05QixZQUFZOEIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUMzQ0ksUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDWDs7MENBQ0MsOERBQUNJOzBDQUFNOzs7Ozs7MENBQ1AsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxPQUFPM0I7Z0NBQ1A0QixVQUFVLENBQUNDLElBQU01QixZQUFZNEIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUMzQ0ksUUFBUTs7Ozs7Ozs7Ozs7O29CQUdYN0IsOEJBQWdCLDhEQUFDOEI7a0NBQUc5Qjs7Ozs7O2tDQUNyQiw4REFBQytCO3dCQUFPUCxNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUI7R0FoRU03QjtLQUFBQTtBQWtFTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xvZ2luL3BhZ2UudHN4P2ZjNjMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgRm9ybUV2ZW50LCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7IC8vIFN0YXRlIGZvciB0aGUgdXNlcm5hbWUgaW5wdXRcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpOyAvLyBTdGF0ZSBmb3IgdGhlIHBhc3N3b3JkIGlucHV0XG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpOyAvLyBTdGF0ZSBmb3Igc3RvcmluZyBlcnJvciBtZXNzYWdlc1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBjb25zb2xlLmxvZyh7IGhhbmRsZVN1Ym1pdCB9KTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvclxuXG4gICAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIlVzZXJuYW1lIGFuZCBwYXNzd29yZCBhcmUgcmVxdWlyZWRcIik7IC8vIFNldCBhbiBlcnJvciBtZXNzYWdlIGlmIGZpZWxkcyBhcmUgZW1wdHlcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpOyAvLyBDbGVhciBhbnkgZXhpc3RpbmcgZXJyb3IgbWVzc2FnZXNcblxuICAgIC8vIE1ha2UgYW4gQVBJIHJlcXVlc3QgdG8gdGhlIGxvZ2luIGVuZHBvaW50XG4gICAgLy8gY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gICAgLy8gY29uc3QgY29kZSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJjb2RlXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKHsgY29kZSB9KTtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9sb2dpblwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0ZXN0OiBcInRlc3RcIiB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGlmIChyZXMub2spIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgIGZldGNoVG9rZW4oKTtcbiAgICAvLyB9LCBbZmV0Y2hUb2tlbl0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Mb2dpbjwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWw+VXNlcm5hbWU6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtlcnJvck1lc3NhZ2UgJiYgPHA+e2Vycm9yTWVzc2FnZX08L3A+fVxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRlc3QiLCJoZWFkZXJzIiwib2siLCJkYXRhIiwianNvbiIsImRpdiIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInJlcXVpcmVkIiwicCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});