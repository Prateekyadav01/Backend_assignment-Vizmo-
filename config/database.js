import mongoose from 'mongoose';



const dbConnection = async(req,res)=>{
    try{
        const connect = await mongoose.connect("mongodb+srv://pra:pra@cluster0.gljskkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/vimeo");
        console.log('Connected to MongoDB Atlas!');
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

export default dbConnection;


// VLlJBotBF92exCRR
// prateeky562