import { Schema, model } from "mongoose"

const studentSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    enrollNumber: {
        type: String,
        required: true,
        length: 12,
        unique: true,
        index: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    courseEnrolledIn: {
        type: String,
        required: true,
    },
    stream: {
        type: String,
        required: true,
    },
    specializationBranch: {
        type: String,
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
    platforms: [
        {
            type: String,
        },
    ],
    coverImage: {
        type: String,
        required: true,
    },
    collegIdCard: {
        type: String,
        required: true,
    },
    resume: {
        type: String,
        required: true
    }
}, { timestamps: true });
export const Student = model("Student",studentSchema); 