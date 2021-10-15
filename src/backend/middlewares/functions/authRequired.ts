import { NextFunction, Request, Response } from "express";
import { JWT_PRIVATE_KEY } from "../../assets/JWT";
import jwt from "jsonwebtoken";
import { AuthToken } from "../../../../types/auth";

const authRequired = (req:Request, res:Response, next:NextFunction) => {

    if (typeof req.cookies.jwt !== "undefined") {
        const token = jwt.verify(req.cookies.jwt, JWT_PRIVATE_KEY) as AuthToken;
        if (token.auth) {
            next();
        }
    } else {
        res.redirect("/sign-in");
    }

}

export default authRequired;