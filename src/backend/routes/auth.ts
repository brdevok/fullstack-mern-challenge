import { Express } from "express";
import ErrorHandler from "../libs/errors/ErrorHandler";
import jwt from "jsonwebtoken";
import { JWT_PRIVATE_KEY } from "../assets/JWT";
import ParentController from "../libs/controllers/ParentController";
import ChildrenController from "../libs/controllers/ChildrenController";
import bcrypt from "bcrypt";

const entry = "/auth";

export default (app:Express) => {

    /**
     * CREATE a parent user document in the database and return
     * a json web token to the client to manage the authorized session.
     */
    app.post(`${entry}/sign-up`, async (req, res) => {
        try {
            const profile = await ParentController.createParent(req.body);
            const tokenData = {
                auth: true,
                isParent: true,
                id: profile._id
            };
            const token = jwt.sign(tokenData, JWT_PRIVATE_KEY, { expiresIn: 60 * 60 });
            res.json({ token });
        } catch (e:any) {
            res.json(ErrorHandler.response(e.message));
        }
    });

    /**
     * Authenticate a parent in the app.
     */
    app.post(`${entry}/sign-in/parent`, async (req, res) => {
        try {
            const credentials = await ParentController.getAuthCredentials(req.body.document);
            if (credentials) {
                const passMatch = await bcrypt.compare(req.body.password, credentials.password);
                if (passMatch) {
                    const tokenData = {
                        auth: true,
                        isParent: true,
                        id: credentials._id
                    };
                    const token = jwt.sign(tokenData, JWT_PRIVATE_KEY, { expiresIn: 60 * 60 });
                    res.json({ token });
                } else {
                    res.json({ notMatch: true });
                }
            } else {
                res.json({ notExist: true });
            }
        } catch (e:any) {
            res.json(ErrorHandler.response(e.message));
        }
    });

    /**
     * Authenticate a children in the app.
     */
     app.post(`${entry}/sign-in/children`, async (req, res) => {
        try {
            const credentials = await ChildrenController.getAuthCredentials(req.body.document);
            if (credentials) {
                const passMatch = await bcrypt.compare(req.body.password, credentials.password);
                if (passMatch) {
                    const tokenData = {
                        auth: true,
                        isParent: false,
                        id: credentials._id
                    };
                    const token = jwt.sign(tokenData, JWT_PRIVATE_KEY, { expiresIn: 60 * 60 });
                    res.json({ token });
                } else {
                    res.json({ notMatch: true });
                }
            } else {
                res.json({ notExist: true });
            }
        } catch (e:any) {
            res.json(ErrorHandler.response(e.message));
        }
    });

};