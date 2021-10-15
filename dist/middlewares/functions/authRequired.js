"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _JWT=require("../../assets/JWT");var _jsonwebtoken=_interopRequireDefault(require("jsonwebtoken"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const authRequired=(req,res,next)=>{if(typeof req.cookies.jwt!=="undefined"){const token=_jsonwebtoken.default.verify(req.cookies.jwt,_JWT.JWT_PRIVATE_KEY);if(token.auth){next()}}else{res.redirect("/sign-in")}};var _default=authRequired;exports.default=_default;