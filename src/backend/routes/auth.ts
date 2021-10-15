import { Express } from "express";
import { Parent, Children } from "../database/database";
import Auth from "../libs/apis/Auth";
import ErrorHandler from "../libs/apis/ErrorHandler";
import jwt from "jsonwebtoken";
import { JWT_PRIVATE_KEY } from "../assets/JWT";

export default (app:Express) => {

    const entry = "/auth";

    app.post(`${entry}/parents/sign-in`, async (req, res) => {
        try {
            const auth = await Auth.signIn(Parent, req.body);
            if (auth) {
                const token = jwt.sign({ auth: true, isParent: true, id: auth }, JWT_PRIVATE_KEY, { expiresIn: 60 * 60 });
                res.json({ token });
            } else {
                res.sendStatus(403);
            }
        } catch (e:any) {
            res.json(ErrorHandler.response(e.message));
        }
    });

    app.post(`${entry}/childrens/sign-in`, async (req, res) => {
        try {
            const auth = await Auth.signIn(Children, req.body);
            if (auth) {
                const token = jwt.sign({ auth: true, id: auth }, JWT_PRIVATE_KEY, { expiresIn: 60 * 60 });
                res.json({ token });
            } else {
                res.sendStatus(403);
            }
        } catch (e:any) {
            res.json(ErrorHandler.response(e.message));
        }
    });

};