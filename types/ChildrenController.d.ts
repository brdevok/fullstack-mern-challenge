import mongoose from "mongoose";
import Children from "../src/backend/database/schemas/children";
import { ParentDocument } from "./ParentController";

/**
 * Interface of the child user document stored in databases.
 * 
 * @see {Children}
 */
export interface ChildrenDocument {
    _id:mongoose.Types.ObjectId,
    name:string,
    surname:string,
    password:string,
    document:string,
    parent:mongoose.Types.ObjectId
}

/**
 * The response data returned from the get children profile method.
 */
export interface ChildrenProfile extends Omit<ChildrenDocument, "password"|"parent"> {
    parent:Omit<ParentDocument, "children"|"password">
}