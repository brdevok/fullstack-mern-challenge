"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _Auth=_interopRequireDefault(require("../apis/Auth"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}/**
 * Contains methods to manage generic data for users in database.
 */class UserController{/**
     * Creates a new user in the database inside of a specific collection.
     * 
     * @param model The model that represents the collection where the user will be created.
     * @param userData The data of the user following the model schema.
     */static async createUser(model,userData){return await model.create(userData).then(user=>{return user._id}).catch(error=>{throw new Error(error.code)})}/**
     * Delete a specific user from the database.
     * 
     * @param model The model where the user will be selected.
     * @param id The _id of the user that will be removed.
     */static async deleteUser(model,id){return await model.remove({_id:id}).then(()=>{return true}).catch(error=>{throw new Error(error.code)})}/**
     * Get a document data of a specific user determined by an ID.
     * 
     * @param model The model that represents the collection where the document will be searched.
     * @param id The id of the document that will be searched.
     */static async getUser(model,id){return await model.findById(id).then(results=>{return results}).catch(error=>{throw new Error(error.code)})}/**
     * Get a specific data from a user document.
     * 
     * @param model The model that represents the collection where the document will be searched.
     * @param id The _id of the document that will be searched.
     * @param fields The fields that will be returned.
     */static async getUserData(model,filter,fields){return await model.findOne(filter,fields).then(results=>{return results}).catch(error=>{throw new Error(error.code)})}/**
     * Edit the data of a specific user.
     * 
     * @param model The model that represents the collection where the document will be searched.
     * @param id The _id of the document that will be updated.
     * @param data The data that will be updated.
     */static async editUserData(model,id,data){// Update password hash
if(data.password)data.password=await _Auth.default.hashPassword(data.password);return await model.findByIdAndUpdate(id,data).then(()=>{return true}).catch(error=>{throw new Error(error.code)})}/**
     * Edit the data of multiple users.
     * 
     * @param model The model that represents the collection where the documents will be searched.
     * @param filter The filter used to search the documents.
     * @param data The data that will be updated.
     */static async editManyUsersData(model,filter,data){return await model.updateMany(filter,data).then(()=>{return true}).catch(error=>{throw new Error(error.code)})}/**
     * Const verify if the user exist in the database.
     * 
     * @param model The model that represents the collection where the document will be searched.
     * @param userDocument The document used to find the user, acts like an _id.
     */static async verifyExistence(model,userDocument){return await model.exists({document:userDocument}).then(results=>{return results}).catch(error=>{throw new Error(error.code)})}}var _default=UserController;exports.default=_default;