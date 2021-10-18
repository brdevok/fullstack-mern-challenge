import { Express } from "express";
import ChildrenController from "../libs/controllers/ChildrenController";
import ErrorHandler from "../libs/errors/ErrorHandler";

const entry = "/api/pub";

export default (app:Express) => {


    app.get(`${entry}/children`, async (req, res) => {
        try {
            const skip = req.query.skip ? parseInt(req.query.skip as string) : 0;
            const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
            const children = await ChildrenController.getChildrenList(skip, limit);
            const resData = {
                skiped: skip,
                resultsCount: children.length >= limit ? limit : children.length,
                data: children
            }
            res.json(resData);
        } catch (e:any) {
            res.json(ErrorHandler.response(e.message));
        }
    });

}