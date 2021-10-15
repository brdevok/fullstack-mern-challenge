"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _mongoose=require("mongoose");/**
 * The children schema contains data of the child user and
 * a field with the parent document for relational purposes.
 */const childrenSchema=new _mongoose.Schema({name:{type:String,required:true},surname:{type:String,required:true},document:{type:String,unique:true,required:true},password:{type:String,required:true},parentId:{type:_mongoose.SchemaTypes.ObjectId,required:true}},{versionKey:false});var _default=childrenSchema;exports.default=_default;