"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.URL=exports.PARENTS_COL=exports.DB_NAME=exports.CHILDRENS_COL=void 0;/**
 * The URL required for the mongo database connection.
 * 
 * The value may change depending on the current enviroment mode if development
 * and production values were set.
 */const URL=process.env.NODE_ENV==="production"?"mongodb://localhost:27017":"mongodb://localhost:27017";/**
 * The name of the database that will be used in the app.
 * 
 * The value may change depending on the current enviroment mode if development
 * and production values were set.
 */exports.URL=URL;const DB_NAME=process.env.NODE_ENV==="production"?"fullstack-mern-challenge-db":"fullstack-mern-challenge-db";/**
 * Name for parents collection.
 * 
 * The value may change depending on the current enviroment mode if development
 * and production values were set.
 */exports.DB_NAME=DB_NAME;const PARENTS_COL=process.env.NODE_ENV==="production"?"parents":"parents";/**
 * Name for parents collection.
 * 
 * The value may change depending on the current enviroment mode if development
 * and production values were set.
 */exports.PARENTS_COL=PARENTS_COL;const CHILDRENS_COL=process.env.NODE_ENV==="production"?"childrens":"childrens";exports.CHILDRENS_COL=CHILDRENS_COL;