"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;/**
 * Verify if the user accessing the api endpoint is authorized,
 * if not return 403, also if the request skip property is set
 * to 'true', the check will be skiped.
 */const apiAuth=(req,res,next)=>{if(!req.skip){if(req.user&&req.user.auth){next()}else{res.sendStatus(403)}}else{next()}};var _default=apiAuth;exports.default=_default;