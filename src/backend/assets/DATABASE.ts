/**
 * The URL required for the mongo database connection.
 * 
 * The value may change depending on the current enviroment mode if development
 * and production values were set.
 */
export const URL:string = process.env.NODE_ENV === "production" ? "mongodb://localhost:27017" : "mongodb://localhost:27017";

/**
 * The name of the database that will be used in the app.
 * 
 * The value may change depending on the current enviroment mode if development
 * and production values were set.
 */
export const DB_NAME:string = process.env.NODE_ENV === "production" ? "fullstack-mern-challenge-db" : "fullstack-mern-challenge-db";