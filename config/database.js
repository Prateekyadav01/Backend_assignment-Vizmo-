import mongoose from 'mongoose';



const dbConnection = async(req,res)=>{
    try{
        const connect = await mongoose.connect("mongodb+srv://prateeky562:VLlJBotBF92exCRR@vizmo.ymazyij.mongodb.net/?retryWrites=true&w=majority&appName=Vizmo/vimeo");
        console.log('Connected to MongoDB Atlas!');
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

export default dbConnection;


// VLlJBotBF92exCRR
// prateeky562