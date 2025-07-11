import mongoose from "mongoose";


const OrderItemsSchema = new mongoose.Schema(
    {
        ProductItems:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"PRoduct"
        },
        quantity:{
            type:Number,
            required:true
        }
    }
)

const OrederSchema = new mongoose.Schema(
    {
        OrderPrice:{
            type:Number,
            required:true,
        },
        customer:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",

        },
        OrderType:{
            type:[OrderItemsSchema],
        },
        address:
        {
            type:String,
            required:true,
        },
        status:{
            type:String,
            enums:["pending","canclled","ordered"],
            default:"pending"
        }
    }
    ,{timestamps:true});

export const Order  = mongoose.model("Order",OrederSchema);