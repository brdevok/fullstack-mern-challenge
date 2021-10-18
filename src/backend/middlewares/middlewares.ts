import express, { Express } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import authRequired from "./functions/authRequired";
import notAuthRequired from "./functions/notAuthRequired";
import parseToken from "./functions/parseToken";
import skipApiAuth from "./functions/skipApiAuth";
import apiAuth from "./functions/apiAuth";

export default (app:Express) => {

    /**
     * Statics files served to the client, the path is relative to the
     * built main file where the app executes.
     */
    app.use("/public", express.static(path.join(__dirname, "../public")));

    /**
     * Grant access the request body object data.
     */
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    /**
     * Grant access to cookies sended with the request.
     */
    app.use(cookieParser());

    /**
     * Verify and parse the json web token and grants
     * access to the request user object.
     */
    app.use(parseToken);

    /**
     * Disable the user authorization check for public api routes.
     */
    app.use(/\/api\/pub\/([\w\W]+)/, skipApiAuth);

    /**
     * Verify if a user is authorized to use api endpoints.
     */
    app.use(/\/api\/([\w\W]+)/, apiAuth);

    /**
     * Grant access to those routes that requires a explicit 
     * NOT AUTHORIZED user permission.
     */
    app.use(/\/(sign-in|sign-up)(\/[\w\W]+)/, notAuthRequired);

    /**
     * Grant access to those routes that requires a explicit 
     * AUTHORIZED user permission.
     */
    app.use(/\/(profile|children|children\/([\w\W]+)|sign-out|)/, authRequired);

};