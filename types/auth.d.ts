import { Request } from "express";
import mongoose from "mongoose";

export interface UserAuth {
    document:string,
    password:string
}

export interface UserAuthValidations {
    document:boolean,
    password:boolean
}

export interface UserSignUp {
    name:string,
    surname:string,
    password:string,
    document:string,
    parentId?:string
}

export interface UserPassword {
    _id:mongoose.Types.ObjectId,
    password:string
}


export interface AuthToken extends Request {
    auth:boolean
}

export interface SignInResponse {
    data: {
        token:string,
        error:boolean,
        message:string,
        unhandled: boolean
    }
}