import express from "express";
import { connect } from "./database/database";
import middlewares from "./middlewares/middlewares";
import api from "./routes/api";
import auth from "./routes/auth";
import pages from "./routes/routes";

const app = express();
const port = process.env.PORT || 3000;

// DATABASE
connect();

// MIDDLEWARES
middlewares(app);

// ROUTES
api(app);
auth(app);
pages(app);

// INITIALIZE APP
app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});