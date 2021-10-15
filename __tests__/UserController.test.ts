import { Children, connect, Parent } from "../src/backend/database/database";
import { ChildrenSchema, ParentSchema } from "../types/user";
import UserController from "../src/backend/libs/controllers/UserController";
import mongoose from "mongoose";

/**
 * Generates a random parent user data.
 */
const randomParentGenerator = ():ParentSchema => {
    return {
        name: "Random",
        surname: "Parent",
        document: Math.round(Math.random() * (99999999 - 10000000) + 10000000).toString(),
        password: "TestPassword123"
    };
}

/**
 * Generates a random child user data.
 * 
 * A parent ID is required to create child, and the ID must
 * exist in the parents collection.
 */
const randomChildrenGenerator = (parentId:mongoose.Types.ObjectId):ChildrenSchema => {
    return {
        name: "Random",
        surname: "Child",
        document: Math.round(Math.random() * (99999999 - 10000000) + 10000000).toString(),
        password: "TestPassword123",
        parentId
    };
}
//  + -------------- +
//  |  TESTS SUITES  |
//  + -------------- +

// Connect the database to run tests
beforeAll(async () => await connect());


// Existent documents data for tests (all data stored in this variables must exist in database!)
const existentParentId = new mongoose.Types.ObjectId("61689f3d5ee578c063c64887");
const unexistentParentId = new mongoose.Types.ObjectId("6168a3a55ceee9acb30c14b1");
const existentParentIdToDelete = new mongoose.Types.ObjectId("6168a032ea91d04ffea18f11");
const existentChildIdToDelete = new mongoose.Types.ObjectId("6168a3a55ceee9acb30c14b9");
const existentParentDocumentation = "66009220";

describe.skip("Creation of a new user.", () => {

    test("Create a parent must return an _id object if creation was successfully.", async () => {
        const results = typeof UserController.createUser(Parent, randomParentGenerator());
        expect(results).toBe("object");
    });

    test("Create a child must return an _id object if creation was successfully.", async () => {
        const results = typeof UserController.createUser(Children, randomChildrenGenerator(existentParentId));
        expect(results).toBe("object");
    });

    test("Trying to create a user with duplicated documentation must throw error.", async () => {
        const randomUser = randomParentGenerator();
        randomUser.document = existentParentDocumentation;
        let error:string;
        try {
            await UserController.createUser(Parent, randomUser);
        } catch (e) {
            error = e.message;
        }
        expect(error).toEqual("11000");
    });

});

describe.skip("Deletion of a user", () => {

    test("Deletion method must return 'true' for success.", async () => {
        const deleteParent = await UserController.deleteUser(Parent, existentParentIdToDelete);
        const deleteChild = await UserController.deleteUser(Children, existentChildIdToDelete);
        expect(deleteParent).toBe(true);
        expect(deleteChild).toBe(true);
    })

});

describe.skip("Get a user document", () => {

    test("Get an existent user must return a user document.", async () => {
        const results = await UserController.getUser(Parent, existentParentId);
        expect(typeof results).toStrictEqual("object");
        expect("_id" in results).toBe(true);
    });

    test("Get an unexistent user must return null.", async () => {
        const results = await UserController.getUser(Parent, unexistentParentId);
        expect(results).toBe(null);
    });

});

describe.skip("Get specific data from a user", () => {

    test("Get document and password from user document must return an object with a password & document keys", async () => {
        const results = await UserController.getUserData(Parent, { document: existentParentDocumentation}, "password document");
        expect(typeof results).toBe("object");
        expect("password" in results).toBe(true);
        expect("document" in results).toBe(true);
    });

});

