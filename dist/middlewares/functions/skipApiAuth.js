"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;const skipApiAuth=(req,res,next)=>{req.skip=true;next()};var _default=skipApiAuth;exports.default=_default;