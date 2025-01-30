import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:Email,required:true},
    password:{type:String,required:true},
    confirmPassword:{type:String,required:true}
})

const user=new mongoose.model("User",userSchema)
export default user;