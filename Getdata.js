const express=require("express")
const cors=require("cors")

const app=express()
require("./mongoose")
app.use(express.json())
app.use(cors())
const studentmodel=require("./studentSchema")

app.get("/",async(req,resp)=>{

    const result=await studentmodel.find()
    resp.send(result)
}
)
app.listen(5000)