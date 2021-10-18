import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { ReqUser } from "../../../../types/api";
import { JWT_PRIVATE_KEY } from "../../assets/JWT";

/**
 * Parse the json web token from the cookies sended with the request,
 * if the token exists and is well formed, then parse it and store the
 * data in the request user object to use later as authentication and
 * consulting data.
 */
const parseToken:RequestHandler = (req, res, next) => {

    if (req.cookies.jwt) {

        try {
            const token = jwt.verify(req.cookies.jwt, JWT_PRIVATE_KEY) as ReqUser;
            req.user = token;
            next();
        } catch (e:any) {
            console.log(e.message);
            next();
        }

    } else {
        next();
    }

};

export default parseToken;