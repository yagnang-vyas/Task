const express = require("express")
const user = require("./models/user")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{number,password}=req.body

    try{
        const check=await user.findOne({number:number})

        if(check){
            if(check.password===password){
                res.json("exist")
            }
            else{
                res.json("notcorrect")
            }
           
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{name,number,password}=req.body
    console.log(req.body)
    const data={
        name:name,
        number:number,
        password:password
    }

    try{
        const check=await user.findOne({number:number})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await user.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(8000,()=>{
    console.log("port connected");
})

