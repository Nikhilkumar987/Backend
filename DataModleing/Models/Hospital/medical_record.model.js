import mongoose from "mongoose";

const Mediacl_record_schema = new mongoose.Schema({},{timestamps:true});

export const Medical_record = mongoose.model("Medical_record",Mediacl_record_schema);