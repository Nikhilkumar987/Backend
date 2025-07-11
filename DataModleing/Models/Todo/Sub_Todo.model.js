import { type } from "express/lib/response";
import mongoose from "mongoose";

const sub_todoSchema  = new mongoose.Schema(
    {
        content:{
            type:String,
            required:true,
        },
        completed:{
            type:Boolean,
            default:false,
        },
        ceratedby:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
    }
    ,{timestamps:true});


export const subTodo = mongoose.model("subTodo",sub_todoSchema);