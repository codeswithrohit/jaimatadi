"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/NEET",{

/***/ "./src/pages/NEET.js":
/*!***************************!*\
  !*** ./src/pages/NEET.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Typewriter = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), text = ref[0], setText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), index = ref1[0], setIndex = ref1[1];\n    var messages = [\n        \"Free Notes: Access our extensive library of study material\",\n        \"Test Your Knowledge: Take our Free Mock Tests\",\n        \"DIY Project Ideas: Learn by Doing with Step-by-Step Guides\",\n        \"Resources for Students: Everything you need to succeed\",\n        \"Join Our Community: Collaborate, Learn, and Grow with Us\", \n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (index < messages.length) {\n            setTimeout(function() {\n                setText(messages[index]);\n                setIndex(index + 1);\n            }, 1000);\n        }\n    }, [\n        index\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center py-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-3xl font-bold text-gray-800\",\n            children: text.split(\"\").map(function(char, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    style: {\n                        animationDelay: \"\".concat(index * 50, \"ms\")\n                    },\n                    children: char\n                }, index, false, {\n                    fileName: \"F:\\\\rohitbhai\\\\Padhog website\\\\Real a4appoint\\\\a4appoint-with-rohit\\\\src\\\\pages\\\\NEET.js\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"F:\\\\rohitbhai\\\\Padhog website\\\\Real a4appoint\\\\a4appoint-with-rohit\\\\src\\\\pages\\\\NEET.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"F:\\\\rohitbhai\\\\Padhog website\\\\Real a4appoint\\\\a4appoint-with-rohit\\\\src\\\\pages\\\\NEET.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_s(Typewriter, \"lCz4Dv/LypjccaT75rUHQJOTEmM=\");\n_c = Typewriter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Typewriter);\nvar _c;\n$RefreshReg$(_c, \"Typewriter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvTkVFVC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFtRDs7QUFFbkQsSUFBTUcsVUFBVSxHQUFHLFdBQU07OztJQUN2QixJQUF3QkYsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUE3QkcsSUFBSSxHQUFhSCxHQUFZLEdBQXpCLEVBQUVJLE9BQU8sR0FBSUosR0FBWSxHQUFoQjtJQUNwQixJQUEwQkEsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUE5QkssS0FBSyxHQUFjTCxJQUFXLEdBQXpCLEVBQUVNLFFBQVEsR0FBSU4sSUFBVyxHQUFmO0lBQ3RCLElBQU1PLFFBQVEsR0FBRztRQUNmLDREQUE0RDtRQUM1RCwrQ0FBK0M7UUFDL0MsNERBQTREO1FBQzVELHdEQUF3RDtRQUN4RCwwREFBMEQ7S0FDM0Q7SUFFRE4sZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSUksS0FBSyxHQUFHRSxRQUFRLENBQUNDLE1BQU0sRUFBRTtZQUMzQkMsVUFBVSxDQUFDLFdBQU07Z0JBQ2ZMLE9BQU8sQ0FBQ0csUUFBUSxDQUFDRixLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN6QkMsUUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDckIsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNWO0tBQ0YsRUFBRTtRQUFDQSxLQUFLO0tBQUMsQ0FBQyxDQUFDO0lBRVoscUJBQ0UsOERBQUNLLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG1CQUFtQjtrQkFDaEMsNEVBQUNDLElBQUU7WUFBQ0QsU0FBUyxFQUFDLGtDQUFrQztzQkFDN0NSLElBQUksQ0FBQ1UsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFVixLQUFLO3FDQUM5Qiw4REFBQ1csTUFBSTtvQkFBYUMsS0FBSyxFQUFFO3dCQUFFQyxjQUFjLEVBQUUsRUFBQyxDQUFhLE1BQUUsQ0FBYmIsS0FBSyxHQUFHLEVBQUUsRUFBQyxJQUFFLENBQUM7cUJBQUU7OEJBQzNEVSxJQUFJO21CQURJVixLQUFLOzs7OzBCQUVUO2FBQ1IsQ0FBQzs7Ozs7aUJBQ0M7Ozs7O2FBQ0QsQ0FDTjtDQUNIO0dBL0JLSCxVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUFpQ2hCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL05FRVQuanM/NThmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFR5cGV3cml0ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgbWVzc2FnZXMgPSBbXHJcbiAgICAnRnJlZSBOb3RlczogQWNjZXNzIG91ciBleHRlbnNpdmUgbGlicmFyeSBvZiBzdHVkeSBtYXRlcmlhbCcsXHJcbiAgICAnVGVzdCBZb3VyIEtub3dsZWRnZTogVGFrZSBvdXIgRnJlZSBNb2NrIFRlc3RzJyxcclxuICAgICdESVkgUHJvamVjdCBJZGVhczogTGVhcm4gYnkgRG9pbmcgd2l0aCBTdGVwLWJ5LVN0ZXAgR3VpZGVzJyxcclxuICAgICdSZXNvdXJjZXMgZm9yIFN0dWRlbnRzOiBFdmVyeXRoaW5nIHlvdSBuZWVkIHRvIHN1Y2NlZWQnLFxyXG4gICAgJ0pvaW4gT3VyIENvbW11bml0eTogQ29sbGFib3JhdGUsIExlYXJuLCBhbmQgR3JvdyB3aXRoIFVzJyxcclxuICBdO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGluZGV4IDwgbWVzc2FnZXMubGVuZ3RoKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldFRleHQobWVzc2FnZXNbaW5kZXhdKTtcclxuICAgICAgICBzZXRJbmRleChpbmRleCArIDEpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICB9LCBbaW5kZXhdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMTBcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwXCI+XHJcbiAgICAgICAge3RleHQuc3BsaXQoJycpLm1hcCgoY2hhciwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9IHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBgJHtpbmRleCAqIDUwfW1zYCB9fT5cclxuICAgICAgICAgICAge2NoYXJ9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHlwZXdyaXRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUeXBld3JpdGVyIiwidGV4dCIsInNldFRleHQiLCJpbmRleCIsInNldEluZGV4IiwibWVzc2FnZXMiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzcGxpdCIsIm1hcCIsImNoYXIiLCJzcGFuIiwic3R5bGUiLCJhbmltYXRpb25EZWxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/NEET.js\n"));

/***/ })

});