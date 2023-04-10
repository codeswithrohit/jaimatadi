"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/signup";
exports.ids = ["pages/api/signup"];
exports.modules = {

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./src/middleware/mongoose.js":
/*!************************************!*\
  !*** ./src/middleware/mongoose.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDb = (handler)=>async (req, res)=>{\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n            return handler(req, res);\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n        return handler(req, res);\n    };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDb);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbWlkZGxld2FyZS9tb25nb29zZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsU0FBUyxHQUFHQyxDQUFBQSxPQUFPLEdBQUksT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUc7UUFDM0MsSUFBSUosMkVBQWtDLEVBQUM7WUFDbkMsT0FBT0UsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsQ0FBQztTQUMzQjtRQUNELE1BQU1KLHVEQUFnQixDQUFDUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO1FBQzdDLE9BQU9SLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztLQUM1QjtBQUVELGlFQUFlSCxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXltZW50Ly4vc3JjL21pZGRsZXdhcmUvbW9uZ29vc2UuanM/ZDcyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBjb25uZWN0RGIgPSBoYW5kbGVyID0+IGFzeW5jIChyZXEsIHJlcyk9PntcclxuICAgIGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKXtcclxuICAgICAgICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcylcclxuICAgIH1cclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJKVxyXG4gICAgcmV0dXJuIGhhbmRsZXIocmVxLCByZXMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0RGI7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdERiIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/middleware/mongoose.js\n");

/***/ }),

/***/ "(api)/./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst UserSchema = new mongoose.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    address: {\n        type: String,\n        default: \"\"\n    },\n    phone: {\n        type: String,\n        default: \"\"\n    }\n}, {\n    timestamps: true\n});\nmongoose.models = {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose.model(\"User\", UserSchema)); //export default mongoose.model.User || mongoose.model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbW9kZWxzL1VzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE1BQU1BLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQywwQkFBVSxDQUFDO0FBRXBDLE1BQU1DLFVBQVUsR0FBRyxJQUFJRixRQUFRLENBQUNHLE1BQU0sQ0FBQztJQUNuQ0MsSUFBSSxFQUFFO1FBQUNDLElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtLQUFDO0lBQ3BDQyxLQUFLLEVBQUU7UUFBQ0gsSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO1FBQUVFLE1BQU0sRUFBRSxJQUFJO0tBQUM7SUFDbkRDLFFBQVEsRUFBRTtRQUFDTCxJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBQztJQUN4Q0ksT0FBTyxFQUFFO1FBQUNOLElBQUksRUFBRUMsTUFBTTtRQUFFTSxPQUFPLEVBQUMsRUFBRTtLQUFDO0lBQ25DQyxLQUFLLEVBQUU7UUFBQ1IsSUFBSSxFQUFFQyxNQUFNO1FBQUVNLE9BQU8sRUFBQyxFQUFFO0tBQUM7Q0FHcEMsRUFBRTtJQUFDRSxVQUFVLEVBQUUsSUFBSTtDQUFDLENBQUU7QUFFdkJkLFFBQVEsQ0FBQ2UsTUFBTSxHQUFHLEVBQUU7QUFDcEIsaUVBQWVmLFFBQVEsQ0FBQ2dCLEtBQUssQ0FBQyxNQUFNLEVBQUVkLFVBQVUsQ0FBQyxFQUFDLENBQ2xELDJFQUEyRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BheW1lbnQvLi9zcmMvbW9kZWxzL1VzZXIuanM/N2QwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xyXG5cclxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgbmFtZToge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxyXG4gICAgZW1haWw6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWV9LFxyXG4gICAgcGFzc3dvcmQ6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuICAgIGFkZHJlc3M6IHt0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6Jyd9LFxyXG4gICAgcGhvbmU6IHt0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6Jyd9LFxyXG4gIFxyXG4gICBcclxufSwge3RpbWVzdGFtcHM6IHRydWV9ICk7XHJcblxyXG5tb25nb29zZS5tb2RlbHMgPSB7fVxyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSk7XHJcbi8vZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIlVzZXJTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsImFkZHJlc3MiLCJkZWZhdWx0IiwicGhvbmUiLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/models/User.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/signup.js":
/*!*********************************!*\
  !*** ./src/pages/api/signup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/User */ \"(api)/./src/models/User.js\");\n/* harmony import */ var _middleware_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../middleware/mongoose */ \"(api)/./src/middleware/mongoose.js\");\n\n\nvar CryptoJS = __webpack_require__(/*! crypto-js */ \"crypto-js\");\nconst handler = async (req, res)=>{\n    if (req.method == \"POST\") {\n        const { name , email  } = req.body;\n        let u = new _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            name,\n            email,\n            password: CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET).toString()\n        });\n        await u.save();\n        res.status(200).json({\n            success: \"success\"\n        });\n    } else {\n        res.status(400).json({\n            error: \"This method is noot allowed\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_mongoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NpZ251cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0M7QUFDYTtBQUNqRCxJQUFJRSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsNEJBQVcsQ0FBQztBQUVuQyxNQUFNQyxPQUFPLEdBQUcsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDaEMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLElBQUksTUFBTSxFQUFFO1FBQ3RCLE1BQU0sRUFBQ0MsSUFBSSxHQUFFQyxLQUFLLEdBQUMsR0FBR0osR0FBRyxDQUFDSyxJQUFJO1FBQzlCLElBQUlDLENBQUMsR0FBRyxJQUFJWCxvREFBSSxDQUFDO1lBQUNRLElBQUk7WUFBRUMsS0FBSztZQUFFRyxRQUFRLEVBQUVWLFFBQVEsQ0FBQ1csR0FBRyxDQUFDQyxPQUFPLENBQUNULEdBQUcsQ0FBQ0ssSUFBSSxDQUFDRSxRQUFRLEVBQUVHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUMsQ0FBQ0MsUUFBUSxFQUFFO1NBQUMsQ0FBQztRQUNySCxNQUFNUCxDQUFDLENBQUNRLElBQUksRUFBRTtRQUNkYixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxTQUFTO1NBQUMsQ0FBQztLQUc5QyxNQUNJO1FBQ0RoQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUNFLEtBQUssRUFBRSw2QkFBNkI7U0FBQyxDQUFDO0tBTS9EO0NBQ0o7QUFDRCxpRUFBZXRCLGdFQUFTLENBQUNHLE9BQU8sQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGF5bWVudC8uL3NyYy9wYWdlcy9hcGkvc2lnbnVwLmpzPzBhMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uL21vZGVscy9Vc2VyXCJcclxuaW1wb3J0IGNvbm5lY3REYiBmcm9tIFwiLi4vLi4vbWlkZGxld2FyZS9tb25nb29zZVwiXHJcbnZhciBDcnlwdG9KUyA9IHJlcXVpcmUoXCJjcnlwdG8tanNcIik7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PSAnUE9TVCcpIHtcclxuICAgICAgICBjb25zdCB7bmFtZSwgZW1haWx9ID0gcmVxLmJvZHlcclxuICAgICAgICBsZXQgdSA9IG5ldyBVc2VyKHtuYW1lLCBlbWFpbCwgcGFzc3dvcmQ6IENyeXB0b0pTLkFFUy5lbmNyeXB0KHJlcS5ib2R5LnBhc3N3b3JkLCBwcm9jZXNzLmVudi5BRVNfU0VDUkVUKS50b1N0cmluZygpfSlcclxuICAgICAgICBhd2FpdCB1LnNhdmUoKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogXCJzdWNjZXNzXCJ9KVxyXG5cclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe2Vycm9yOiBcIlRoaXMgbWV0aG9kIGlzIG5vb3QgYWxsb3dlZFwifSlcclxuICAgICAgIFxyXG4gICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REYihoYW5kbGVyKTsiXSwibmFtZXMiOlsiVXNlciIsImNvbm5lY3REYiIsIkNyeXB0b0pTIiwicmVxdWlyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJuYW1lIiwiZW1haWwiLCJib2R5IiwidSIsInBhc3N3b3JkIiwiQUVTIiwiZW5jcnlwdCIsInByb2Nlc3MiLCJlbnYiLCJBRVNfU0VDUkVUIiwidG9TdHJpbmciLCJzYXZlIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/signup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/signup.js"));
module.exports = __webpack_exports__;

})();