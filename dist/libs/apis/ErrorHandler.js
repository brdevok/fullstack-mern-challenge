"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _ERRORS=_interopRequireDefault(require("../../assets/ERRORS"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}/**
 * Contains methods to handle with the possible error
 * throws around the app.
 */class ErrorHandler{/**
     * Receive an error code and build a object that can be
     * sended as a response to the client.
     * 
     * @param code The error code to identify the issue.
     */static response(code){if(code&&code in _ERRORS.default){return{error:true,message:_ERRORS.default[code]}}else{console.error(code);return{error:true,unhandled:true,message:_ERRORS.default["UNEXPECTED_ERROR"]}}}}var _default=ErrorHandler;exports.default=_default;