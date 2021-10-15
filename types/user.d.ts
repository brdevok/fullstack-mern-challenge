import mongoose from "mongoose";

export interface UnknownDocument {
    _id:mongoose.Types.ObjectId
}

export interface UnknownUserIdentity {
    document:string
}

export interface ParentSchema {
    name:string,
    surname:string,
    document:string,
    password:string
}

export interface ParentDocument extends ParentSchema {
    _id:mongoose.Types.ObjectId
}

export interface ChildrenSchema {
    name:string,
    surname:string,
    document:string,
    password:string,
    parentId:mongoose.Types.ObjectId
}

export interface ChildrenDocument extends ChildrenSchema {
    _id:mongoose.Types.ObjectId
}