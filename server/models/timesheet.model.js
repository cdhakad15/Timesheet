import mongoose from "mongoose";

const timesheetSchema = new mongoose.Schema({
    employee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Employee", 
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    hoursWorked:{
        type:Number,
        required:true
    },
    taskDescription:{
        type:String,
        required:true
    },
    isRated:{
        type:Boolean,
        default:false
    }
});

export default mongoose.model("Timesheet",timesheetSchema);
