import Children from "../../database/schemas/children";
import Parent from "../../database/schemas/parent";
import conn from "../../database/database";
import { ChildrenDocument, ChildrenProfile } from "../../../../types/ChildrenController";
import { ProfileCreation, ProfileUpdate } from "../../../../types/ParentController";
import bcrypt from "bcrypt";

/**
 * Contains methods to threat with the childrens collection data.
 */
class ChildrenController {

    /**
     * Create a new child user document on the database.
     * 
     * @param parentId The document id of the parent related to this new child user.
     * @param data The data that will be stored.
     */
    public static async createChild(parentId:string ,data:ProfileCreation):Promise<ChildrenDocument> {

        data.password = await bcrypt.hash(data.password, 10);

        const child = new Children({ ...data, parent: parentId });
        
        let results:ChildrenDocument;

        const session = await conn.startSession();
        try {
            session.startTransaction();

            results = await child.save();
            await Parent.updateOne({ _id: parentId }, { $push: { children: child._id } });

            await session.commitTransaction();
        } catch (e:any) {
            await session.abortTransaction();
            await session.endSession();

            console.log(e.message);
            throw new Error(e.code);
        }
        await session.endSession();

        return results;

    }

    /**
     * Get a child user document data from the database.
     * 
     * @param id The id of the user document to be find.
     */
    public static async getProfile(id:string):Promise<ChildrenProfile> {

        return await Children.findOne({ _id: id }, "name surname document")
            .populate("parent", "name surname document", Parent)
                .then((results:ChildrenProfile) => {
                    return results;
                })
                .catch(error => {
                    console.log(error.message);
                    throw new Error(error.code);
                });

    }

    /**
     * Update the profile data of a children document.
     * 
     * @param id The id of the document that will be updated.
     * @param data The data that will be updated.
     */
    public static async updateProfile(id:string, data:ProfileUpdate) {

        // Hash password if it is set in the update object.
        if (data.password) data.password = await bcrypt.hash(data.password, 10);
        else delete data.password;

        return await Children.updateOne({ _id: id }, data)
            .then((results) => {
                return results;
            })
            .catch(error => {
                console.log(error.message);
                throw new Error(error.code);
            });

    }

    public static async deleteChild(id:string, parentId:string) {

        let results:ChildrenDocument;

        const session = await conn.startSession();
        try {
            session.startTransaction();

            results = await Children.remove({ _id: id });
            await Parent.updateOne({ _id: parentId }, { $pull: { children: id } });

            await session.commitTransaction();
        } catch (e:any) {
            await session.abortTransaction();
            await session.endSession();

            console.log(e.message);
            throw new Error(e.code);
        }
        await session.endSession();

        return results;

    }

    /**
     * Get the auth credentials of a user, like password and id, the match
     * is made with the document ID.
     * 
     * @param document The user document unique ID to find the user in the database.
     */
     public static async getAuthCredentials(document:string) {

        return await Children.findOne({ document }, "password")
            .then((results) => {
                return results;
            })
            .catch(error => {
                console.log(error.message);
                throw new Error(error.code);
            });

    }

    /**
     * List a set of children documents specified by a parent ID.
     * 
     * @param skip Skip documents from the beginning to the passed number.
     * @param limit Limit the documents to show.
     */
    public static async getChildrenList(skip:number=0, limit:number=0):Promise<ChildrenDocument[]> {

        return await Children.find({}, "name surname document")
            .populate("parent", "name surname document", Parent)
                .skip(skip)
                .limit(limit)
                    .then((results:ChildrenDocument[]) => {
                        return results;
                    })
                    .catch(error => {
                        console.log(error.message);
                        throw new Error(error.code);
                    })

    }

}

export default ChildrenController;