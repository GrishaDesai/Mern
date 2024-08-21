import mongoose from "mongoose";

const userTable = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }
    },
    {timestamps: true}
);

const User = mongoose.model("User", userTable)
export default User;