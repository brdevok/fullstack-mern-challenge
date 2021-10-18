import mongoose, { Schema } from "mongoose";

/**
 * The parent schema contains data of the parent user and
 * a field with relational data for childrens.
 */
const parentSchema = new Schema({
    name:     { type: String,                 required: true },
    surname:  { type: String,                 required: true },
    document: { type: String,                 required: true, unique: true },
    password: { type: String,                 required: true },
    children: [{type: Schema.Types.ObjectId,  ref: "Children"}]
}, {
    versionKey: false
});

/**
 * The Parent model manage the parent documents stored in the
 * parents schema on the database.
 */
const Parent = mongoose.model("Parent", parentSchema);

export default Parent;