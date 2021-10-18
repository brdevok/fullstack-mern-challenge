import { RequestHandler } from "express";

/**
 * Checks the request user object and verify if the user doesn't exist 
 * or wasn't authorized, if that's true keeps going, granting the client
 * access to those app sections where auth is no required.
 */
const notAuthRequired:RequestHandler = (req, res, next) => {

    if (!req.user || !req.user.auth) {
        next();
    } else {  
        res.redirect("/");
    }

}

export default notAuthRequired;