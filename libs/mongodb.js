import mongoose from "mongoose";

const connectMongoDB = async()=>{
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log("mongoose connected");
    }catch(err){
        console.log("ERROR : Can't connect to mongoose")
    }
}

export default connectMongoDB;