import mongoose from "mongoose";

const PacientSchema = new mongoose.Schema({
    nam:{
        type:String,
        required:true,
    },
    dignoedWith:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
    },
    address:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    BloodGroup:{
        type:String,
        required:true,
    },
    Gender:{
        type:String,
        enum:["Male","Female","MALE","FEMALE","OTHERS","others"],
        required:true,
    },
    AdmittedIN:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
    }
},{timestamps:true});

export const Pacient = mongoose.model("Pacient",PacientSchema);