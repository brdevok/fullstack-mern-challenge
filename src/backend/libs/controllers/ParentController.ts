import { ParentDocument, ParentProfile, ProfileCreation, ProfileUpdate } from "../../../../types/ParentController";
import Children from "../../database/schemas/children";
import Parent from "../../database/schemas/parent";
import bcrypt from "bcrypt";

/**
 * Contains methods to threat with the parents collection data.
 */
class ParentController {

    /**
     * Creates a new parent user document in the database.
     * 
     * @param data Data of the user that will be stored.
     */
    public static async createParent(data:ProfileCreation):Promise<ParentDocument> {

        data.password = await bcrypt.hash(data.password, 10);

        return await Parent.create(data)
            .then((results:ParentDocument) => {
                return results;
            })
            .catch(error => {
                console.log(error.message);
                throw new Error(error.code);
            });

    }

    /**
     * Get the data of a parent user document from the database
     * 
     * @param id The id of the user document to be find.
     */
    public static async getProfile(id:string):Promise<ParentProfile> {

        return await Parent.findOne({ _id: id }, "name surname document")
            .populate("children", "name surname document", Children)
                .then((results:ParentProfile) => {
                    return results;
                })
                .catch(error => {
                    console.log(error.message);
                    throw new Error(error.code);
                });

    }

    /**
     * Update the profile data of a parent document.
     * 
     * @param id The id of the document that will be updated.
     * @param data The data that will be updated.
     */
    public static async updateProfile(id:string, data:ProfileUpdate) {

        // Hash password if it is set in the update object.
        if (data.password) data.password = await bcrypt.hash(data.password, 10);
        else delete data.password;

        return await Parent.updateOne({ _id: id }, data)
            .then((results) => {
                return results;
            })
            .catch(error => {
                console.log(error.message);
                throw new Error(error.code);
            });

    }

    /**
     * Get the auth credentials of a user, like password and id, the match
     * is made with the document ID.
     * 
     * @param document The user document unique ID to find the user in the database.
     */
    public static async getAuthCredentials(document:string) {

        return await Parent.findOne({ document }, "password")
            .then((results) => {
                return results;
            })
            .catch(error => {
                console.log(error.message);
                throw new Error(error.code);
            });

    }

}

export default ParentController;