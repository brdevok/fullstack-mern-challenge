"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _UserController=_interopRequireDefault(require("../controllers/UserController"));var _bcrypt=_interopRequireDefault(require("bcrypt"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}/**
 * Contain methods to manage the authorization of a user
 */class Auth{/**
     * Hashes a password to be stored in the database securely
     * 
     * @param password The password to be hashed
     */static async hashPassword(password){return await _bcrypt.default.hash(password,10)}/**
     * Compare a password against a hash and return the results.
     * 
     * @param password The password to be compared.
     * @param hash The hash to be compared.
     */static async comparePassword(password,hash){return await _bcrypt.default.compare(password,hash)}/**
     * Controls the sign up logic of a user inside the app, detects if 
     * the user already exist, if not then it will be created.
     * 
     * @param model The model where the user will be stored.
     * @param data The data of the user that will be stored.
     */static async signUp(model,data){// Check if user exist
const userExist=await _UserController.default.verifyExistence(model,data.document);if(userExist)throw new Error("USER_ALREADY_EXIST");// Hash password
data.password=await this.hashPassword(data.password);// Create the user
const signedUserId=await _UserController.default.createUser(model,data);if(signedUserId)return signedUserId.toString();throw new Error}/**
     * Manage the sign in logic of a user, compares if the credentials exists and
     * if passwords match.
     * 
     * @param model The model where the credentials will be searched.
     * @param data The data that will be compared.
     */static async signIn(model,data){// Check if user exist
const userExist=await _UserController.default.verifyExistence(model,data.document);if(!userExist)throw new Error("USER_NOT_EXIST");// Compare password
const userData=await _UserController.default.getUserData(model,{document:data.document},"password _id");const compare=await this.comparePassword(data.password,userData.password);if(compare)return userData._id.toString();throw new Error("WRONG_PASSWORD")}}var _default=Auth;exports.default=_default;