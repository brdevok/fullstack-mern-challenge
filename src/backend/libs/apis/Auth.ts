import mongoose from "mongoose";
import UserController from "../controllers/UserController";
import { UserAuth, UserPassword, UserSignUp } from "../../../../types/auth";
import bcrypt from "bcrypt";

/**
 * Contain methods to manage the authorization of a user
 */
class Auth {

    /**
     * Hashes a password to be stored in the database securely
     * 
     * @param password The password to be hashed
     */
    private static async hashPassword(password:string):Promise<string> {

        return await bcrypt.hash(password, 10);

    }

    /**
     * Compare a password against a hash and return the results.
     * 
     * @param password The password to be compared.
     * @param hash The hash to be compared.
     */
    private static async comparePassword(password:string, hash:string):Promise<boolean> {

        return await bcrypt.compare(password, hash);

    }

    /**
     * Controls the sign up logic of a user inside the app, detects if 
     * the user already exist, if not then it will be created.
     * 
     * @param model The model where the user will be stored.
     * @param data The data of the user that will be stored.
     */
    public static async signUp(model:mongoose.Model<any>, data:UserSignUp):Promise<boolean> {

        // Check if user exist
        const userExist = await UserController.verifyExistence(model, data.document);
        if (userExist) throw new Error("USER_ALREADY_EXIST");

        // Hash password
        data.password = await this.hashPassword(data.password);

        // Create the user
        const signedUserId = await UserController.createUser(model, data);
        if (signedUserId) return true;

        throw new Error();

    }

    /**
     * Manage the sign in logic of a user, compares if the credentials exists and
     * if passwords match.
     * 
     * @param model The model where the credentials will be searched.
     * @param data The data that will be compared.
     */
    public static async signIn(model:mongoose.Model<any>, data:UserAuth):Promise<string> {

        // Check if user exist
        const userExist = await UserController.verifyExistence(model, data.document);
        if (!userExist) throw new Error("USER_NOT_EXIST");

        // Compare password
        const userData = await UserController.getUserData(model, { document: data.document}, "password _id") as UserPassword;
        const compare = await this.comparePassword(data.password, userData.password);
        
        if (compare) return userData._id.toString();
        throw new Error("WRONG_PASSWORD");

    }

}

export default Auth;