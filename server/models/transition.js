import { Schema, model } from "mongoose";

const transitionSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref: 'User',
        required:true
      
    },
    amount:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        enum:["credit","debit"],
        required:true
    },
    category:{
        type:String,
        enum:["shopping", "food", "rent", "entertainment", "travel", "other","education"],
        default:"other"
    },
    description:{
        type:String
    }
},
{
    timestamps: true
}
)
const transition = model ("transition ",transitionSchema);
export default transition