"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;/**
 * Error messages returned to the client.
 */const ERROR_MESSAGES={/**
     * Message retrieved when trying to register a new user with the same
     * document ID of some existent user.
     */USER_ALREADY_EXIST:"A user with this ID already exist.",/**
     * Message retrieved when trying to authorize a user with a document ID
     * that is not registered yet.
     */USER_NOT_EXIST:"The user with this ID is not registered.",/**
     * Message retrieved when trying to authorize a user with an incorrect
     * password.
     */WRONG_PASSWORD:"Password doesn't match.",/**
     * This special message is retrieved when an unhandled error ocurred
     * trying to attempt some action in the database.
     */UNEXPECTED_ERROR:"Oops! An unexpected error occurred."};var _default=ERROR_MESSAGES;exports.default=_default;