import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            lowercase:true,
        },
        phonenumber:{
            type:Number,
            required:true,
        },
        address:
        {
            type:String,
            lowercase:true,
        },
        salary:{
            type:Number,
            required:true,
        },
        qalification:{
            type:String,
            required:true,
        },
        exprienceInYears:
        {
            type:Number,
            required:true,
            default:true,
        },
        WorksInHospitals:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital",
            
        }
    }
    ,{timestamps:true});

export const doctor = mongoose.model("Doctor",DoctorSchema);