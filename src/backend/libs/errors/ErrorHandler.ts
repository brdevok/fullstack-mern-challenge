import { ErrorResponse } from "../../../../types/api";
import ERROR_MESSAGES from "../../assets/ERRORS";

/**
 * Contains methods to handle with the possible error
 * throws around the app.
 */
class ErrorHandler {

    /**
     * Receive an error code and build a object that can be
     * sended as a response to the client.
     * 
     * @param code The error code to identify the issue.
     */
    public static response(code?:string):ErrorResponse {

        if (code && code in ERROR_MESSAGES) {
            return {
                error: true,
                message: ERROR_MESSAGES[code]
            };
        } else {
            console.error(code);
            return {
                error: true,
                unhandled: true,
                message: ERROR_MESSAGES["UNEXPECTED_ERROR"]
            };
        }

    }

}

export default ErrorHandler;