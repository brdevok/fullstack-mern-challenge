/**
 * Error object returned as a response when an error occurs in
 * an api call.
 */
export interface ErrorResponse {
    error: boolean,
    message: string,
    unhandled?: boolean
}

/**
 * Data stored in the json web token when a user is authorized
 * and used in the request user object from the Express request handler
 * on every protected route.
 */
interface ReqUser {
    auth:boolean,
    id:string,
    isParent?:boolean
}

/**
 * Override some default types
 */
declare global {

    namespace Express {

        /**
         * Extends the default request object of the Express request handler.
         * 
         * @see {RequestHandler}
         */
        export interface Request {
            user:ReqUser,
            skip?:boolean
        }

    }

}
