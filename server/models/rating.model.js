import mongoose, { Schema } from "mongoose";

const ratingSchema =new Schema({
    employee:{
        type:Schema.Types.ObjectId,
        ref:"Employee",
        required:true
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    date:{
        type:Date,
        default:Date.now
    }
});

export default mongoose.model("Rating", ratingSchema);
