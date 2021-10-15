import mongoose from "mongoose";
import { URL, DB_NAME, PARENTS_COL, CHILDRENS_COL } from "../assets/DATABASE";
import parentSchema from "./schemas/parent";
import childrenSchema from "./schemas/children";

/**
 * The URL that will be used to connect to the dabase.
 */
const url = `${URL}/${DB_NAME}`;

/**
 * Create a new connection to the specified URL and database
 * included in the connection URL string argument.
 */
export const connect = async () => {

    await mongoose.connect(url)
        .then(() => {
            console.log("The database is connected and ready to use.");
        })
        .catch((error) => {
            console.log(error);
        });

};


/**
 * Create the models of the collections that the app will be 
 * using from the database.
 */
export const Parent   = mongoose.model(PARENTS_COL, parentSchema);
export const Children = mongoose.model(CHILDRENS_COL, childrenSchema);