import express, { Express } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import authRequired from "./functions/authRequired";
import notAuthRequired from "./functions/notAuthRequired";

export default (app:Express) => {

    app.use("/public", express.static(path.join(__dirname, "../public")));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(/\/(sign-in|sign-up)(\/[\w\W]+){0,}/, notAuthRequired);
    app.use(/\/(register-child|sign-out|)/, authRequired);

};