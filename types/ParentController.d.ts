import mongoose from "mongoose";
import Parent from "../src/backend/database/schemas/parent";
import { ChildrenProfile } from "./ChildrenController";

/**
 * Interface of the parent user document stored in database.
 * 
 * @see {Parent}
 */
export interface ParentDocument {
    _id:mongoose.Types.ObjectId,
    name:string,
    surname:string,
    document:string,
    password:string,
    children:mongoose.Types.ObjectId[]
}

/**
 * The response data returned from the get parent profile method.
 */
export interface ParentProfile extends Omit<ParentDocument, "password"|"children"> {
    children:Omit<ChildrenProfile, "parent">
}

/**
 * Contains the possible data that is available to update a user
 * profile in the database, no matter the user type.
 */
export interface ProfileUpdate extends Omit<ParentDocument, "_id"|"children"|"password"> {
    password?:string
}

/**
 * Contains the data that is required to create a new user profile,
 * no matter the user type.
 */
export interface ProfileCreation extends Omit<ParentDocument, "_id"|"children"> {}