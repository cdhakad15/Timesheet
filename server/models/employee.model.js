import mongoose from "mongoose";

const emplyoyeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    
    reportingManager:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Employee"
    }
});

export default mongoose.model("Employee", emplyoyeeSchema);