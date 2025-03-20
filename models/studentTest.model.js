import { Schema, model } from "mongoose"
const  TestStudentAttendedSchema = new Schema({
    studentId : {
        type:Schema.Types.ObjectId,
        ref:"Student"
    },
    testId : {
        type:Schema.Types.ObjectId,
        ref:"Test"
    },
},{timestamps:true});
export const StudentTest  = model("StudentTest",TestStudentAttendedSchema);