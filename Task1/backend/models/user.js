const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/Task")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true,
        
    },
    password:{
        type:String,
        required:true
    },
})

const user = mongoose.model("user",newSchema)

module.exports=user
