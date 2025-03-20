import { Schema, model } from "mongoose"

const  TestSchema = new Schema({
    testSubject:{
        type: String,
        required: true,
    },
    maxScore:{
        type: Number,
        required: true,
    },

}, { timestamps: true })
export const Test = model("Test",TestSchema);