"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;const getToken=(req,res,next)=>{console.log(req.cookies);next()};var _default=getToken;exports.default=_default;