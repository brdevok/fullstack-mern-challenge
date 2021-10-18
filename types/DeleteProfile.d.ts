import { ErrorResponse } from "./api";

/**
 * Possible results of calling delete profile api endpoint.
 */
export interface DeleteProfileSubmitResponse extends Partial<ErrorResponse> {
    deleted?:boolean
}