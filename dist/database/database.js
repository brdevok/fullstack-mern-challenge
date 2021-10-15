"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.connect=exports.Parent=exports.Children=void 0;var _mongoose=_interopRequireDefault(require("mongoose"));var _DATABASE=require("../assets/DATABASE");var _parent=_interopRequireDefault(require("./schemas/parent"));var _children=_interopRequireDefault(require("./schemas/children"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}/**
 * The URL that will be used to connect to the dabase.
 */const url=`${_DATABASE.URL}/${_DATABASE.DB_NAME}`;/**
 * Create a new connection to the specified URL and database
 * included in the connection URL string argument.
 */const connect=async()=>{await _mongoose.default.connect(url).then(()=>{console.log("The database is connected and ready to use.")}).catch(error=>{console.log(error)})};/**
 * Create the models of the collections that the app will be 
 * using from the database.
 */exports.connect=connect;const Parent=_mongoose.default.model(_DATABASE.PARENTS_COL,_parent.default);exports.Parent=Parent;const Children=_mongoose.default.model(_DATABASE.CHILDRENS_COL,_children.default);exports.Children=Children;