import ChildrenController from "../src/backend/libs/controllers/ChildrenController";
import { connect } from "../src/backend/database/database";
import mongoose from "mongoose";
import { ProfileUpdate } from "../types/ParentController";

//  + -------------- +
//  |  TESTS SUITES  |
//  + -------------- +

// Connect the database to run tests
beforeAll(async () => await connect());

// Existent documents data for tests (all data stored in this variables must exist in database!)
const existentParentId = "616c747c2c6b7ddf2534abab";
const existentChildId = "616c74efd1581fe73a4373a1";
const existentChildDoc = "17349796";

const existentChildIdToDelete = "616c759802a0760e9ddf32ec";
const existentParentIdOfChild = "616c747c2c6b7ddf2534abab"; // Must be related to the above child id

describe.skip("Test the children creation method", () => {

    test("Must return the parent document of created", async () => {
        const results:any = await ChildrenController.createChild(existentParentId, {
            name: "Name",
            surname: "Surname",
            document: Math.round(Math.random() * (99999999 - 10000000) + 10000000).toString(),
            password: "Pass123"
        });
        expect(Object.keys(results._doc).sort()).toEqual(["_id", "name", "surname", "document", "password", "parent"].sort());
    });

});

describe.skip("Test the get profile data method.", () => {

    test("Must return a profile data object if child exist.", async () => {
        const results:any = await ChildrenController.getProfile(existentChildId);
        expect(Object.keys(results._doc).sort()).toEqual(["_id", "name", "surname", "document", "parent"].sort());
    });

});

describe.skip("Test the update profile method.", () => {

    test("Must return updated details if the update was succesful.", async () => {
        const results:any = await ChildrenController.updateProfile(existentChildId, { name: "Updated Name" } as ProfileUpdate);
        expect(results.matchedCount).toBe(1);
        expect(results.modifiedCount).toBeLessThanOrEqual(1);
    });

});

describe.skip("Test the delete child method.", () => {

    test("Must return deletion details if the deletion was succesful.", async () => {
        const results:any = await ChildrenController.deleteChild(existentChildIdToDelete, existentParentIdOfChild);
        expect(results.deletedCount).toBe(1);
    });

});

describe.skip("Test the authorization credentials getter method", () => {

    test("Must return a password and an id if a user if exist", async () => {
        const results:any = await ChildrenController.getAuthCredentials(existentChildDoc);
        expect(Object.keys(results._doc).sort()).toEqual(["_id", "password"].sort());
    });

    test("Must return null if user doesn't exist", async () => {
        const results:any = await ChildrenController.getAuthCredentials("notexist");
        expect(results).toEqual(null);
    });

});

describe.skip("Test the get children list method", () => {

    test("Must return an array of children if success", async () => {
        const results:any = await ChildrenController.getChildrenList();
        expect(Array.isArray(results)).toBe(true);
    });

    test("Must return only 2 children inside an array when limit the results to 2", async () => {
        const results:any = await ChildrenController.getChildrenList(0, 2);
        expect(results.length).toBe(2);
    });

});