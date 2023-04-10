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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

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

/***/ "(api)/./src/pages/api/login.js":
/*!********************************!*\
  !*** ./src/pages/api/login.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/User */ \"(api)/./src/models/User.js\");\n/* harmony import */ var _middleware_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../middleware/mongoose */ \"(api)/./src/middleware/mongoose.js\");\n\n\nvar CryptoJS = __webpack_require__(/*! crypto-js */ \"crypto-js\");\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst handler = async (req, res)=>{\n    if (req.method == \"POST\") {\n        let user = await _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n            \"email\": req.body.email\n        });\n        const bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);\n        let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);\n        if (user) {\n            if (req.body.email == user.email && req.body.password == decryptedPass) {\n                var token = jwt.sign({\n                    email: user.email,\n                    name: user.name\n                }, process.env.JWT_SECRET, {\n                    expiresIn: \"30d\"\n                });\n                res.status(200).json({\n                    success: true,\n                    token,\n                    email: user.email\n                });\n            } else {\n                res.status(200).json({\n                    success: false,\n                    error: \"Invalid Credentials\"\n                });\n            }\n        } else {\n            res.status(200).json({\n                success: false,\n                error: \"No user found\"\n            });\n        }\n    } else {\n        res.status(400).json({\n            error: \"This method is noot allowed\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_mongoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUNhO0FBQ2pELElBQUlFLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQyw0QkFBVyxDQUFDO0FBQ25DLElBQUlDLEdBQUcsR0FBR0QsbUJBQU8sQ0FBQyxrQ0FBYyxDQUFDO0FBR2pDLE1BQU1FLE9BQU8sR0FBRyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNoQyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sSUFBSSxNQUFNLEVBQUU7UUFDdEIsSUFBSUMsSUFBSSxHQUFHLE1BQU1ULDREQUFZLENBQUM7WUFBQyxPQUFPLEVBQUNNLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDQyxLQUFLO1NBQUMsQ0FBQztRQUN2RCxNQUFNQyxLQUFLLEdBQUdYLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDQyxPQUFPLENBQUNOLElBQUksQ0FBQ08sUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDO1FBQ3pFLElBQUlDLGFBQWEsR0FBR1AsS0FBSyxDQUFDUSxRQUFRLENBQUNuQixRQUFRLENBQUNvQixHQUFHLENBQUNDLElBQUksQ0FBQztRQUNyRCxJQUFJZCxJQUFJLEVBQUU7WUFDVixJQUFJSCxHQUFHLENBQUNLLElBQUksQ0FBQ0MsS0FBSyxJQUFJSCxJQUFJLENBQUNHLEtBQUssSUFBSU4sR0FBRyxDQUFDSyxJQUFJLENBQUNLLFFBQVEsSUFBSUksYUFBYSxFQUFHO2dCQUNyRSxJQUFJSSxLQUFLLEdBQUdwQixHQUFHLENBQUNxQixJQUFJLENBQUM7b0JBQUNiLEtBQUssRUFBQ0gsSUFBSSxDQUFDRyxLQUFLO29CQUFDYyxJQUFJLEVBQUNqQixJQUFJLENBQUNpQixJQUFJO2lCQUFDLEVBQUVULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUyxVQUFVLEVBQUU7b0JBQUNDLFNBQVMsRUFBRSxLQUFLO2lCQUFDLENBQUM7Z0JBQ2xHckIsR0FBRyxDQUFDc0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUNDLE9BQU8sRUFBRSxJQUFJO29CQUFHUCxLQUFLO29CQUFFWixLQUFLLEVBQUVILElBQUksQ0FBQ0csS0FBSztpQkFBQyxDQUFDO2FBRXBFLE1BQ0k7Z0JBQ0xMLEdBQUcsQ0FBQ3NCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFQyxPQUFPLEVBQUUsS0FBSztvQkFBR0MsS0FBSyxFQUFFLHFCQUFxQjtpQkFBQyxDQUFDO2FBQ3pFO1NBQ0osTUFDWTtZQUNEekIsR0FBRyxDQUFDc0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxLQUFLO2dCQUFHQyxLQUFLLEVBQUUsZUFBZTthQUFDLENBQUM7U0FFbkU7S0FFSixNQUlJO1FBQ0R6QixHQUFHLENBQUNzQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFDRSxLQUFLLEVBQUUsNkJBQTZCO1NBQUMsQ0FBQztLQU0vRDtDQUNKO0FBQ0QsaUVBQWUvQixnRUFBUyxDQUFDSSxPQUFPLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BheW1lbnQvLi9zcmMvcGFnZXMvYXBpL2xvZ2luLmpzP2VlZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uL21vZGVscy9Vc2VyXCJcclxuaW1wb3J0IGNvbm5lY3REYiBmcm9tIFwiLi4vLi4vbWlkZGxld2FyZS9tb25nb29zZVwiXHJcbnZhciBDcnlwdG9KUyA9IHJlcXVpcmUoXCJjcnlwdG8tanNcIik7XHJcbnZhciBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKTtcclxuXHJcblxyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PSAnUE9TVCcpIHtcclxuICAgICAgICBsZXQgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7XCJlbWFpbFwiOnJlcS5ib2R5LmVtYWlsfSlcclxuICAgICAgICBjb25zdCBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KHVzZXIucGFzc3dvcmQsIHByb2Nlc3MuZW52LkFFU19TRUNSRVQpO1xyXG4gICAgICAgIGxldCBkZWNyeXB0ZWRQYXNzID0gYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xyXG4gICAgICAgIGlmICh1c2VyICl7XHJcbiAgICAgICAgaWYgKHJlcS5ib2R5LmVtYWlsID09IHVzZXIuZW1haWwgJiYgcmVxLmJvZHkucGFzc3dvcmQgPT0gZGVjcnlwdGVkUGFzcyApIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuID0gand0LnNpZ24oe2VtYWlsOnVzZXIuZW1haWwsbmFtZTp1c2VyLm5hbWV9LCBwcm9jZXNzLmVudi5KV1RfU0VDUkVULCB7ZXhwaXJlc0luOiBcIjMwZFwifSk7XHJcbiAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3VjY2VzczogdHJ1ZSAsIHRva2VuLCBlbWFpbDogdXNlci5lbWFpbH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlICwgZXJyb3I6IFwiSW52YWxpZCBDcmVkZW50aWFsc1wifSlcclxuICAgIH1cclxufVxyXG4gICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlICwgZXJyb3I6IFwiTm8gdXNlciBmb3VuZFwifSlcclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgIFxyXG5cclxuXHJcbiAgIGVsc2UgIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyb3I6IFwiVGhpcyBtZXRob2QgaXMgbm9vdCBhbGxvd2VkXCJ9KVxyXG4gICAgICAgXHJcbiAgICAgICBcclxuXHJcbiAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERiKGhhbmRsZXIpOyJdLCJuYW1lcyI6WyJVc2VyIiwiY29ubmVjdERiIiwiQ3J5cHRvSlMiLCJyZXF1aXJlIiwiand0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVzZXIiLCJmaW5kT25lIiwiYm9keSIsImVtYWlsIiwiYnl0ZXMiLCJBRVMiLCJkZWNyeXB0IiwicGFzc3dvcmQiLCJwcm9jZXNzIiwiZW52IiwiQUVTX1NFQ1JFVCIsImRlY3J5cHRlZFBhc3MiLCJ0b1N0cmluZyIsImVuYyIsIlV0ZjgiLCJ0b2tlbiIsInNpZ24iLCJuYW1lIiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/login.js"));
module.exports = __webpack_exports__;

})();