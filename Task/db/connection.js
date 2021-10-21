const mongoose = require('mongoose');

const url ="mongodb://127.0.0.1:27017/tasks";
const connectDB= async () =>{
    try{
        const con = await mongoose.connect(url,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
    
        })
        console.log('MongoDB connected');
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports=connectDB;