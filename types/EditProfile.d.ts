import { ErrorResponse } from "./api";
import { ChildrenProfile } from "./ChildrenController";
import { ParentProfile } from "./ParentController";
import { SignUpForm, SignUpFormValidation } from "./SignUp";

/**
 * Defines the editable data of a user profile.
 */
export interface EditProfileForm extends SignUpForm {}

/**
 * Defines the validations of a the editable user data
 * for the updater form.
 */
export interface EditProfileFormValidations extends SignUpFormValidation {}

/**
 * Define the possible result from api after updating profile data.
 */
export interface EditProfileSubmitReponse extends Partial<ErrorResponse> {
    updated?:boolean
}

/**
 * Define the possible result of get parent profile data for 
 * update purposes.
 */
export interface GetEditableParentProfileData extends ParentProfile, Partial<ErrorResponse> {}

/**
 * Define the possible result of get child profile data for 
 * update purposes.
 */
 export interface GetEditableChildProfileData extends ChildrenProfile, Partial<ErrorResponse> {}