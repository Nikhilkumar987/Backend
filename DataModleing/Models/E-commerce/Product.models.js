import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        description:{
            type:String,
            required:true,
        },
        name:{
            type:String,
            required:true,
        },
        ProductImage:{
            type:String,
        },
        Price:{
            type:Number,
            default:0,
        },
        Stock:{
            type:Number,
            default:0
        },
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category",
            required:true,

        },
        Owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
    }
    ,{timestamps:true});

export const Product  = mongoose.model("Product",ProductSchema);