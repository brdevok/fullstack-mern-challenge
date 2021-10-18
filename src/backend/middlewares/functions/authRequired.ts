import { RequestHandler } from "express";

/**
 * Checks the request user object and verify if the user exist and
 * was authorized, if that's true keeps going, granting the client
 * access to those app sections where auth is required.
 */
const authRequired:RequestHandler = (req, res, next) => {

    if (req.user && req.user.auth) {
        next();
    } else {
        res.redirect("/sign-in");
    }

}

export default authRequired;