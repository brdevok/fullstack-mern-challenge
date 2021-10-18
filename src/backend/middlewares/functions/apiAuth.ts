import { RequestHandler } from "express";

/**
 * Verify if the user accessing the api endpoint is authorized,
 * if not return 403, also if the request skip property is set
 * to 'true', the check will be skiped.
 */
const apiAuth:RequestHandler = (req, res, next) => {

    if (!req.skip) {
        if (req.user && req.user.auth) {
            next();
        } else {
            res.sendStatus(403);
        }
    } else {
        next();
    }

}

export default apiAuth;