"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _database=require("../../database/database");/**
 * Contains specifi methods to threat with the childrens collection data.
 */class ChildrenController{/**
     * List a set of children documents specified by a parent ID.
     * 
     * @param id The parent _id to filter the children documents.
     * @param skip Skip documents from the beginning to the passed number.
     * @param limit Limit the documents to show.
     */static async listParentChildren(id,skip,limit){return await _database.Children.find({parentId:id}).skip(skip).limit(limit).then(results=>{return results}).catch(error=>{throw new Error(error.code)})}}var _default=ChildrenController;exports.default=_default;