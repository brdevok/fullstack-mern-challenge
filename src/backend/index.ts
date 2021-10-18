import express from "express";
import { connect } from "./database/database";
import middlewares from "./middlewares/middlewares";
import api from "./routes/api";
import auth from "./routes/auth";
import public_api from "./routes/public_api";
import pages from "./routes/routes";

const app = express();
const port = process.env.PORT || 3000;

// DATABASE
connect();

// MIDDLEWARES
middlewares(app);

// ROUTES
public_api(app);
api(app);
auth(app);
pages(app); // Must be placed at the bottom as it handle any route!

// INITIALIZE APP
app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});