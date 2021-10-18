import mongoose, { Schema } from "mongoose";

/**
 * The children schema contains data of the child user and
 * a field with the parent document for relational purposes.
 */
 const childrenSchema = new Schema({
    name:     { type: String,                required: true },
    surname:  { type: String,                required: true },
    document: { type: String,                required: true, unique: true },
    password: { type: String,                required: true },
    parent:   { type: Schema.Types.ObjectId, required: true, ref: "Parent" }
}, {
    versionKey: false
});

/**
 * The Children model manage the children documents stored in the
 * childrens schema on the database.
 */
const Children = mongoose.model("Children", childrenSchema);

export default Children;