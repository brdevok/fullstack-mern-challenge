import mongoose from "mongoose";
import { ChildrenDocument } from "../../../../types/user";
import { Children } from "../../database/database";

/**
 * Contains specifi methods to threat with the childrens collection data.
 */
class ChildrenController {

    /**
     * List a set of children documents specified by a parent ID.
     * 
     * @param id The parent _id to filter the children documents.
     * @param skip Skip documents from the beginning to the passed number.
     * @param limit Limit the documents to show.
     */
    public static async listParentChildren(id:mongoose.Types.ObjectId, skip:number, limit:number):Promise<ChildrenDocument[]> {

        return await Children.find({ parentId: id})
            .skip(skip)
            .limit(limit)
                .then((results:ChildrenDocument[]) => {
                    return results;
                })
                .catch((error) => {
                    throw new Error(error.code);
                })

    }

}

export default ChildrenController;