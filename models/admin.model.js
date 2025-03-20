import {Schema,model} from "mongoose"

const adminSchema = new Schema({
    fullName:{
        type:String,
        required:true,
        trim: true,
        index: true,
    },
    uniqueCollegeID:{ // username
        type: String,
        required: true,
        unique: true,
        index: true,
        length: 12,
    },
    password:{
        type:String,
        required: [true, "password is required"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
    },
    expertSubject:{
        type:String,
        required:true
    },
    coverImage:{
        type:String,
        required:true
    },
});
export const Admin = model("Admin",adminSchema);