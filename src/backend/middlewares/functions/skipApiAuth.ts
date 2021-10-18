import { RequestHandler } from "express";

/**
 * Set the skip request property to avoid the api user
 * authorization check, useful for public api endpoints.
 */
const skipApiAuth:RequestHandler = (req, res, next) => {

    req.skip = true;
    next();

}

export default skipApiAuth;