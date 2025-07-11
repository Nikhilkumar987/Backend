// importing the mongoose tool from mongoose;
import mongoose from 'mongoose'
// userSchema from mongoose schema by using new keyword new mongoose.Schema which take 
// an object as parameter

const userSchema = new mongoose.Schema(
    {
        username : {
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        email : {
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        password:{
            type:String,
            required:true,
        }

},{timestamps:true});

// making a model for mongoose it take to parameter name in string "" ,on which bases
export const User = mongoose.model("User" , userSchema);
