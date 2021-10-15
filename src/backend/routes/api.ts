import { Express } from "express";

export default (app:Express) => {

    const entry = "/api";

    app.get(`${entry}/`, (req, res) => {
        res.send("API ENDPOINT");
    });

};