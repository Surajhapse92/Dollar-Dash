import { Schema, model } from "mongoose";

const userSchemas = new Schema({
    name: {
        type: String,
        default: '-'
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true

    },
    gender: {
        type: String,
        default: 'prefect not to say'
    }
})

const User = model('User', userSchemas)

export default User