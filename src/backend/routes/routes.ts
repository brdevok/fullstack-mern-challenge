import { Express } from "express";
import path from "path";

/**
 * Call this function at the bottom of all routes specified in the app
 * to return the static files only in the client UI routes.
 */
export default (app:Express) => {

    /**
     * Send to the client the static files of the app (the source
     * path is relative to the built version of this file).
     */
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};