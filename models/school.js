import mongoose, { Schema } from "mongoose";

const schoolSchema=new mongoose.Schema({
    schoolName:{
        type:String,
        required:true
    },
    schoolEmail:{
        type:String,
        required:true,
    },
    schoolPhone:{
        type:String,
        required:true
    },
    schoolAddress:{
        type:String,
        required:true
    },
    schoolAffiliatedBoard:{
        type:String,
        required:true
    }

});
mongoose.models={};
export const School =mongoose.model("School",schoolSchema);