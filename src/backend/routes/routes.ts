import { Express } from "express";
import path from "path";

export default (app:Express) => {

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};