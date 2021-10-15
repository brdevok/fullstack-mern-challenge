"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _database=require("../../database/database");/**
 * Contains a collection of statical methods to manage the parents data
 * inside the database.
 */class ParentsApi{/** 
     * Creates a new parent doument inside the parents collection 
     */static async createParent(data){return await _database.Parents.create(data).then(()=>true).catch(()=>false)}/**
     * Add a child document identifier inside a specific parent document
     * to handle a future relation.
     */static async addChild(parentId,childDocument){// Get current children array
const children=await _database.Parents.findById(parentId,"children").then(results=>results.children).catch(()=>false);// Update if children value is ok
if(children!==false){// Add the new child to the array only if not exist in it
if(!children.some(child=>child.document===childDocument)){children.push({document:childDocument})}else{return false}// Update
return await _database.Parents.findByIdAndUpdate(parentId,{children}).then(()=>true).catch(()=>false)}else{return false}}}var _default=ParentsApi;exports.default=_default;