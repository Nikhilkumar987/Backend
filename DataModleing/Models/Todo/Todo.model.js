
import { type } from "express/lib/response";
import mongoose from "mongoose";


const todoSchema = new mongoose.Schema(
    {
        content:{
            type:string,
            required:true,
        },
        completed:{
            type:Boolean,
            default:false,
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"

        },
        subTodos:[
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:"subTodo",
            },
        ]

    }
    ,{timeStamp:true});

export const Todo = mongoose.model("Todo",todoSchema);