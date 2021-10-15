import mongoose from "mongoose";
import { UnknownDocument, UnknownUserIdentity } from "../../../../types/user";

/**
 * Contains methods to manage generic data for users in database.
 */
class UserController {

    /**
     * Creates a new user in the database inside of a specific collection.
     * 
     * @param model The model that represents the collection where the user will be created.
     * @param userData The data of the user following the model schema.
     */
    public static async createUser(model:mongoose.Model<any>, userData:object):Promise<mongoose.Types.ObjectId> {

        return await model.create<object>(userData)
            .then((user:UnknownDocument) => {
                return user._id;
            })
            .catch(error => {
                throw new Error(error.code);
            })

    }

    /**
     * Delete a specific user from the database.
     * 
     * @param model The model where the user will be selected.
     * @param id The _id of the user that will be removed.
     */
    public static async deleteUser(model:mongoose.Model<any>, id:mongoose.Types.ObjectId):Promise<boolean> {

        return await model.remove({ _id: id })
            .then(() => {
                return true;
            })
            .catch(error => {
                throw new Error(error.code);
            });

    }

    /**
     * Get a document data of a specific user determined by an ID.
     * 
     * @param model The model that represents the collection where the document will be searched.
     * @param id The id of the document that will be searched.
     */
    public static async getUser(model:mongoose.Model<any>, id:mongoose.Types.ObjectId):Promise<UnknownDocument> {

        return await model.findById(id)
            .then((results:UnknownDocument) => {
                return results;
            })
            .catch(error => {
                throw new Error(error.code);
            });

    }

    /**
     * Get a specific data from a user document.
     * 
     * @param model The model that represents the collection where the document will be searched.
     * @param id The _id of the document that will be searched.
     * @param fields The fields that will be returned.
     */
    public static async getUserData(model:mongoose.Model<any>, filter:object, fields:string):Promise<object> {

        return await model.findOne(filter, fields)
            .then((results:object) => {
                return results;
            })
            .catch(error => {
                throw new Error(error.code);
            });

    }

    /**
     * Const verify if the user exist in the database.
     * 
     * @param model The model that represents the collection where the document will be searched.
     * @param userDocument The document used to find the user, acts like an _id.
     */
    public static async verifyExistence(model:mongoose.Model<any>, userDocument:string):Promise<boolean> {

        return await model.exists({ document: userDocument } as UnknownUserIdentity)
            .then((results:boolean) => {
                return results;
            })
            .catch(error => {
                throw new Error(error.code);
            });

    }

}

export default UserController;