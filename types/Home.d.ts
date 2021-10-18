import { ErrorResponse } from "./api";
import { ChildrenDocument, ChildrenProfile } from "./ChildrenController";
import { ParentProfile } from "./ParentController";

/**
 * Results of calling the get profile api endpoint (for parents). 
 */
export interface GetProfileResponse extends Partial<ParentProfile>, Partial<ChildrenProfile>, Partial<ErrorResponse> {}

/**
 * Profile data used in the home page of the app.
 */
export interface ProfileData extends Partial<ParentProfile>, Partial<ChildrenProfile> {}

/**
 * Data user for the creation of the childrens table.
 */
export interface ChildrenTableData extends Omit<ChildrenDocument, "_id"|"password"|"parent"> {
    _id:string
}