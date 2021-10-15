import { Schema } from "mongoose";

/**
 * The parent schema contains data of the parent user.
 */
const parentSchema = new Schema({
    name:     { type: String,  required: true },
    surname:  { type: String,  required: true },
    document: { type: String,  unique:   true, required: true },
    password: { type: String,  required: true }
}, {
    versionKey: false
});

export default parentSchema;