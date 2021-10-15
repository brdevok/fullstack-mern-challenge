"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _mongoose=require("mongoose");/**
 * The children document schema is used inside the parent schema
 * to store a array of children's documentation to link them with
 * the parent.
 */const childrenDocumentSchema=new _mongoose.Schema({document:{type:String,unique:true,required:true}},{_id:false});/**
 * The parent schema contains data of the parent user and
 * an array containing the children document that will be used
 * to relational purposes.
 */const parentsSchema=new _mongoose.Schema({name:{type:String,required:true},surname:{type:String,required:true},document:{type:String,unique:true,required:true},password:{type:String,required:true},children:[childrenDocumentSchema]},{versionKey:false});var _default=parentsSchema;exports.default=_default;