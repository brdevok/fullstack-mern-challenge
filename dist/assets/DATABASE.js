"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.URL=exports.DB_NAME=void 0;const URL=process.env.NODE_ENV==="production"?"mongodb://localhost:27017":"mongodb://localhost:27017";exports.URL=URL;const DB_NAME=process.env.NODE_ENV==="production"?"fullstack-mern-challenge-db":"fullstack-mern-challenge-db";exports.DB_NAME=DB_NAME;