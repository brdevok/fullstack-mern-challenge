import ParentController from "../src/backend/libs/controllers/ParentController";
import { connect } from "../src/backend/database/database";
import { ProfileUpdate } from "../types/ParentController";
 
//  + -------------- +
//  |  TESTS SUITES  |
//  + -------------- +

// Connect the database to run tests
beforeAll(async () => await connect());

// Existent documents data for tests (all data stored in this variables must exist in database!)
const existentParentId = "616c747c2c6b7ddf2534abab";
const existentParentDoc = "56026698";

describe.skip("Test the parent creation method", () => {

    test("Must return the parent document of created", async () => {
        const results:any = await ParentController.createParent({
            name: "Name",
            surname: "Surname",
            document: Math.round(Math.random() * (99999999 - 10000000) + 10000000).toString(),
            password: "Pass123"
        });
        expect(Object.keys(results._doc).sort()).toEqual(["_id", "name", "surname", "document", "password", "children"].sort());
    });

});

describe.skip("Test the get profile data method.", () => {

    test("Must return a profile data object if parent exist.", async () => {
        const results:any = await ParentController.getProfile(existentParentId);
        expect(Object.keys(results._doc).sort()).toEqual(["_id", "name", "surname", "document", "children"].sort());
    });

});

describe.skip("Test the update profile method.", () => {

    test("Must return updated details if the update was successful.", async () => {
        const results:any = await ParentController.updateProfile(existentParentId, { name: "Updated Name 2" } as ProfileUpdate);
        expect(results.matchedCount).toBe(1);
        expect(results.modifiedCount).toBeLessThanOrEqual(1);
    });

});

describe.skip("Test the authorization credentials getter method", () => {

    test("Must return a password and an id if a user if exist", async () => {
        const results:any = await ParentController.getAuthCredentials(existentParentDoc);
        expect(Object.keys(results._doc).sort()).toEqual(["_id", "password"].sort());
    });

    test("Must return null if user doesn't exist", async () => {
        const results:any = await ParentController.getAuthCredentials("notexist");
        expect(results).toEqual(null);
    });

});