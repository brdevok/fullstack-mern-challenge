import { ErrorResponse } from "./api";
import { SignUpSubmitResponse } from "./SignUp";

/**
 * Defines the required data to sign in in the app.
 */
export interface SignInForm {
    document:string,
    password:string
}

/**
 * Contain fields equals to {@link SignInForm} with boolean
 * values to record the form inputs validations.
 */
export interface SignInFormValidations {
    document:boolean,
    password:boolean
}

/**
 * The possible results after submitting the data for sign in a user.
 */
export interface SignInSubmitResponse extends Partial<ErrorResponse> {
    notExist?:boolean
    notMatch?:boolean
    token?:string
}