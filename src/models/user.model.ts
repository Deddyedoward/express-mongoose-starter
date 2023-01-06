import mongoose, { model, Schema } from "mongoose";

const schema = new Schema({
    firstName: 'string',
    lastName: 'string',
    email: 'string'
});

const userModel = model('users', schema);
export default userModel;