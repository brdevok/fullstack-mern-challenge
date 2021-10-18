import mongoose from "mongoose";
import { URL, DB_NAME } from "../assets/DATABASE";

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
 * The current connection with the database.
 */
const conn = mongoose.connection;

export default conn;
