import mongoose from "mongoose";

const adminLoginSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const AdminLogin= mongoose.models.AdminLogin || mongoose.model('AdminLogin',adminLoginSchema)
export default AdminLogin;