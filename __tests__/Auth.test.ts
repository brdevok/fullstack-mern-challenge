import Auth from "../src/backend/libs/apis/Auth";
import { connect, Parent } from "../src/backend/database/database";
import { UserSignUp } from "../types/auth";

/**
 * Generates a random parent user data.
 */
 const randomParentGenerator = ():UserSignUp => {
    return {
        name: "Random",
        surname: "Parent SignUp",
        document: Math.round(Math.random() * (99999999 - 10000000) + 10000000).toString(),
        password: "TestPassword123"
    };
}

//  + -------------- +
//  |  TESTS SUITES  |
//  + -------------- +

// Connect the database to run tests
beforeAll(async () => await connect());

const existentParentDocumentId = "33588819";
const unexistentParentDocumentId = "11111111";
const testPassword = "TestPassword123";

describe.skip("Test the sign up function.", () => {

    test("Must return 'true' if a user is signed up correctly.", async () => {
        const results = await Auth.signUp(Parent, randomParentGenerator());      
        expect(results).toBe(true);
    });

    test("Must throw error for duplicated user sign up.", async () => {
        const user = randomParentGenerator();
        user.document = existentParentDocumentId;
        let error:string;
        try { 
            await Auth.signUp(Parent, user) 
        } catch (e) { 
            error = e.message 
        }
        expect(error).toEqual("USER_ALREADY_EXIST");
    });

});

describe.skip("Test sign in function.", () => {

    test("Must return true if user is signed in correctly.", async () => {
        const results = await Auth.signIn(Parent, { document: existentParentDocumentId, password: testPassword});
        expect(results).toBe(true);
    });

    test("Must throw error if trying to sign in with unexistent document.", async () => {
        let error:string;
        try {
            await Auth.signIn(Parent, { document: unexistentParentDocumentId, password: testPassword});
        } catch (e) {
            error = e.message;
        }
        expect(error).toEqual("USER_NOT_EXIST");
    })

    test("Must throw error if trying to sign in with wrong password.", async () => {
        let error:string;
        try {
            await Auth.signIn(Parent, { document: existentParentDocumentId, password: "wrong"});
        } catch (e) {
            error = e.message;
        }
        expect(error).toEqual("WRONG_PASSWORD");
    })

});