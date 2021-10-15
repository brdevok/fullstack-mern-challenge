import ChildrenController from "../src/backend/libs/controllers/ChildrenController";
import { connect } from "../src/backend/database/database";
import mongoose from "mongoose";

//  + -------------- +
//  |  TESTS SUITES  |
//  + -------------- +

// Connect the database to run tests
beforeAll(async () => await connect());

// Existent documents data for tests (all data stored in this variables must exist in database!)
const existentParentId = new mongoose.Types.ObjectId("61689f3d5ee578c063c64887");
const existentParentIdWithoutChildren = new mongoose.Types.ObjectId("6168a37414a3a2a1bc602cbc");
const existentParentIdWithManyChildren = new mongoose.Types.ObjectId("61689f3d5ee578c063c64887");

describe.skip("Test list children data", () => {

    test("If the parent has children, must return an array of children", async () => {
        const results = await ChildrenController.listParentChildren(existentParentId, 0, 10);
        expect(Array.isArray(results)).toBe(true);
        expect(typeof results[0]).toBe("object");
    });

    test("If the parent has no children, must return an empty array", async () => {
        const results = await ChildrenController.listParentChildren(existentParentIdWithoutChildren, 0, 10);
        expect(Array.isArray(results)).toBe(true);
        expect(results.length === 0).toBe(true);
    });

    test("Limit the picked children documents to 3 must return only 3 documents.", async () => {
        const results = await ChildrenController.listParentChildren(existentParentIdWithManyChildren, 0, 3);
        expect(results.length === 3).toBe(true);
    });

    test("Skip the first 3 children with a limit of 3 must return the 4th, 5th and 5th children.", async () => {
        const snap = await ChildrenController.listParentChildren(existentParentIdWithManyChildren, 0, 6);
        const results = await ChildrenController.listParentChildren(existentParentIdWithManyChildren, 3, 3);
        expect(results.length === 3).toBe(true);
        expect(results[0]._id).toStrictEqual(snap[3]._id);
        expect(results[1]._id).toStrictEqual(snap[4]._id);
        expect(results[2]._id).toStrictEqual(snap[5]._id);
    });

});