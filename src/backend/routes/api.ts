import { Express } from "express";
import ErrorHandler from "../libs/errors/ErrorHandler";
import ChildrenController from "../libs/controllers/ChildrenController";
import ParentController from "../libs/controllers/ParentController";

const entry = "/api";

export default (app:Express) => {

    /**
     * GET the profile data related to the id stored in the
     * request user object.
     */
    app.get(`${entry}/profile`, async (req, res) => {
        try {
            let profileData:object;
            if (req.user.isParent) {
                profileData = await ParentController.getProfile(req.user.id);
            } else {
                profileData = await ChildrenController.getProfile(req.user.id);
            }
            res.json(profileData);
        } catch (e:any) {
            res.json(ErrorHandler.response(e.message));
        }
    });

    /**
     * UPDATE the profile related to the current request user object id value.
     */
    app.put(`${entry}/profile`, async (req, res) => {
        try {
            await ParentController.updateProfile(req.user.id, req.body);
            res.json({ updated: true });
        } catch (e:any) {
            res.json(ErrorHandler.response(e.message));
        }
    });

    /**
     * CREATE a new child profile document. This action is performed
     * by an authorized parent session.
     */
    app.post(`${entry}/children`, async (req, res) => {
        try {
            await ChildrenController.createChild(req.user.id, req.body);
            res.json({ created: true });
        } catch (e:any) {
            res.json(ErrorHandler.response(e.message));
        }
    });
    
    /**
     * GET data of a child document specified by the :id param.
     */
    app.get(`${entry}/children/:id`, async (req, res) => {
        try {
            const childData = await ChildrenController.getProfile(req.params.id);
            res.json(childData);
        } catch (e:any) {
            res.json(ErrorHandler.response(e.message));
        }
    });

    /**
     * UPDATE data of a child profile specified by the :id param.
     */
    app.put(`${entry}/children/:id`, async (req, res) => {
        try {
            await ChildrenController.updateProfile(req.params.id, req.body);
            res.json({ updated: true });
        } catch (e:any) {
            res.json(ErrorHandler.response(e.message));
        }
    });

    /**
     * DELETE a child document specified by the :id param, also the
     * request user id is passed to update the related parent's document.
     */
    app.delete(`${entry}/children/:id`, async (req, res) => {
        try {
            await ChildrenController.deleteChild(req.params.id, req.user.id);
            res.json({ deleted: true });
        } catch (e:any) {
            res.json(ErrorHandler.response(e.message));
        }
    });

};