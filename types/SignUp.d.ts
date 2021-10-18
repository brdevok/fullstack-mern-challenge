import { ErrorResponse } from "./api";
import { ProfileCreation } from "./ParentController";

/**
 * Define the required data to create a user in the app.
 */
export interface SignUpForm extends ProfileCreation {}

/**
 * Contain fields equals to {@link SignUpForm} with boolean
 * values to record the form inputs validations.
 */
export interface SignUpFormValidation {
    name:boolean,
    surname:boolean,
    document:boolean,
    password:boolean
}

/**
 * Defines the possible results of the sign up response.
 */
export interface SignUpSubmitResponse extends Partial<ErrorResponse> {
    token?:string
}

/**
 * Defines the possible results of the children sign up response.
 */
export interface SignUpChildSubmitResponse extends Partial<ErrorResponse> {
    created?:boolean
}