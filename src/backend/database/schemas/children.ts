import { Schema, SchemaTypes } from "mongoose";

/**
 * The children schema contains data of the child user and
 * a field with the parent document for relational purposes.
 */
 const childrenSchema = new Schema({
    name:     { type: String, required: true },
    surname:  { type: String, required: true },
    document: { type: String, unique:   true, required: true },
    password: { type: String, required: true },
    parentId: { type: SchemaTypes.ObjectId, required: true}
}, {
    versionKey: false
});

export default childrenSchema;