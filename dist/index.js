"use strict";var _express=_interopRequireDefault(require("express"));var _database=require("./database/database");var _middlewares=_interopRequireDefault(require("./middlewares/middlewares"));var _api=_interopRequireDefault(require("./routes/api"));var _auth=_interopRequireDefault(require("./routes/auth"));var _routes=_interopRequireDefault(require("./routes/routes"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const app=(0,_express.default)();const port=process.env.PORT||3000;// DATABASE
(0,_database.connect)();// MIDDLEWARES
(0,_middlewares.default)(app);// ROUTES
(0,_api.default)(app);(0,_auth.default)(app);(0,_routes.default)(app);// INITIALIZE APP
app.listen(port,()=>{console.log(`App is listening at http://localhost:${port}`)});