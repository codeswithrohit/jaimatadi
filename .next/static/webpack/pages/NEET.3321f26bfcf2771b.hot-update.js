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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Typewriter = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), text = ref[0], setText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), aindex = ref1[0], setAindex = ref1[1];\n    var messages = [\n        \"Free Notes: Access our extensive library of study material\",\n        \"Test Your Knowledge: Take our Free Mock Tests\",\n        \"DIY Project Ideas: Learn by Doing with Step-by-Step Guides\",\n        \"Resources for Students: Everything you need to succeed\",\n        \"Join Our Community: Collaborate, Learn, and Grow with Us\", \n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (aindex < messages.length) {\n            setTimeout(function() {\n                setText(messages[aindex]);\n                setAindex(aindex + 1);\n            }, 5000);\n        } else {\n            setAindex(0);\n        }\n    }, [\n        aindex,\n        messages\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center py-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-3xl font-bold text-gray-800\",\n            children: text.split(\"\").map(function(char, aindex) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"typewriter-char\",\n                    style: {\n                        animationDelay: \"\".concat(aindex * 50, \"ms\")\n                    },\n                    children: char\n                }, aindex, false, {\n                    fileName: \"F:\\\\rohitbhai\\\\Padhog website\\\\Real a4appoint\\\\a4appoint-with-rohit\\\\src\\\\pages\\\\NEET.js\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"F:\\\\rohitbhai\\\\Padhog website\\\\Real a4appoint\\\\a4appoint-with-rohit\\\\src\\\\pages\\\\NEET.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"F:\\\\rohitbhai\\\\Padhog website\\\\Real a4appoint\\\\a4appoint-with-rohit\\\\src\\\\pages\\\\NEET.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_s(Typewriter, \"lCz4Dv/LypjccaT75rUHQJOTEmM=\");\n_c = Typewriter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Typewriter);\nvar _c;\n$RefreshReg$(_c, \"Typewriter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvTkVFVC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFtRDs7QUFFbkQsSUFBTUcsVUFBVSxHQUFHLFdBQU07OztJQUN2QixJQUF3QkYsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUE3QkcsSUFBSSxHQUFhSCxHQUFZLEdBQXpCLEVBQUVJLE9BQU8sR0FBSUosR0FBWSxHQUFoQjtJQUNwQixJQUE0QkEsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUFoQ0ssTUFBTSxHQUFlTCxJQUFXLEdBQTFCLEVBQUVNLFNBQVMsR0FBSU4sSUFBVyxHQUFmO0lBQ3hCLElBQU1PLFFBQVEsR0FBRztRQUNmLDREQUE0RDtRQUM1RCwrQ0FBK0M7UUFDL0MsNERBQTREO1FBQzVELHdEQUF3RDtRQUN4RCwwREFBMEQ7S0FDM0Q7SUFFRE4sZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSUksTUFBTSxHQUFHRSxRQUFRLENBQUNDLE1BQU0sRUFBRTtZQUM1QkMsVUFBVSxDQUFDLFdBQU07Z0JBQ2ZMLE9BQU8sQ0FBQ0csUUFBUSxDQUFDRixNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMxQkMsU0FBUyxDQUFDRCxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdkIsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNWLE1BQU07WUFDTEMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2Q7S0FDRixFQUFFO1FBQUNELE1BQU07UUFBRUUsUUFBUTtLQUFDLENBQUMsQ0FBQztJQUV2QixxQkFDRSw4REFBQ0csS0FBRztRQUFDQyxTQUFTLEVBQUMsbUJBQW1CO2tCQUNoQyw0RUFBQ0MsSUFBRTtZQUFDRCxTQUFTLEVBQUMsa0NBQWtDO3NCQUM3Q1IsSUFBSSxDQUFDVSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVWLE1BQU07cUNBQy9CLDhEQUFDVyxNQUFJO29CQUFjTCxTQUFTLEVBQUMsaUJBQWlCO29CQUFDTSxLQUFLLEVBQUU7d0JBQUVDLGNBQWMsRUFBRSxFQUFDLENBQWMsTUFBRSxDQUFkYixNQUFNLEdBQUcsRUFBRSxFQUFDLElBQUUsQ0FBQztxQkFBRTs4QkFDekZVLElBQUk7bUJBRElWLE1BQU07Ozs7MEJBRVY7YUFDUixDQUFDOzs7OztpQkFDQzs7Ozs7YUFDRCxDQUNOO0NBQ0g7R0FqQ0tILFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQW1DaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvTkVFVC5qcz81OGY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVHlwZXdyaXRlciA9ICgpID0+IHtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2FpbmRleCwgc2V0QWluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IG1lc3NhZ2VzID0gW1xyXG4gICAgJ0ZyZWUgTm90ZXM6IEFjY2VzcyBvdXIgZXh0ZW5zaXZlIGxpYnJhcnkgb2Ygc3R1ZHkgbWF0ZXJpYWwnLFxyXG4gICAgJ1Rlc3QgWW91ciBLbm93bGVkZ2U6IFRha2Ugb3VyIEZyZWUgTW9jayBUZXN0cycsXHJcbiAgICAnRElZIFByb2plY3QgSWRlYXM6IExlYXJuIGJ5IERvaW5nIHdpdGggU3RlcC1ieS1TdGVwIEd1aWRlcycsXHJcbiAgICAnUmVzb3VyY2VzIGZvciBTdHVkZW50czogRXZlcnl0aGluZyB5b3UgbmVlZCB0byBzdWNjZWVkJyxcclxuICAgICdKb2luIE91ciBDb21tdW5pdHk6IENvbGxhYm9yYXRlLCBMZWFybiwgYW5kIEdyb3cgd2l0aCBVcycsXHJcbiAgXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhaW5kZXggPCBtZXNzYWdlcy5sZW5ndGgpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGV4dChtZXNzYWdlc1thaW5kZXhdKTtcclxuICAgICAgICBzZXRBaW5kZXgoYWluZGV4ICsgMSk7XHJcbiAgICAgIH0sIDUwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0QWluZGV4KDApO1xyXG4gICAgfVxyXG4gIH0sIFthaW5kZXgsIG1lc3NhZ2VzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTEwXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMFwiPlxyXG4gICAgICAgIHt0ZXh0LnNwbGl0KCcnKS5tYXAoKGNoYXIsIGFpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPHNwYW4ga2V5PXthaW5kZXh9IGNsYXNzTmFtZT1cInR5cGV3cml0ZXItY2hhclwiIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBgJHthaW5kZXggKiA1MH1tc2AgfX0+XHJcbiAgICAgICAgICAgIHtjaGFyfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFR5cGV3cml0ZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVHlwZXdyaXRlciIsInRleHQiLCJzZXRUZXh0IiwiYWluZGV4Iiwic2V0QWluZGV4IiwibWVzc2FnZXMiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzcGxpdCIsIm1hcCIsImNoYXIiLCJzcGFuIiwic3R5bGUiLCJhbmltYXRpb25EZWxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/NEET.js\n"));

/***/ })

});