import { ErrorResponse } from "../../../../types/api";
import ERROR_MESSAGES from "../../assets/ERRORS";

class ErrorHandler {

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