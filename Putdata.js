const express=require("express")
const cors=require("cors")
const app=express()
require("./mongoose")
app.use(express.json())
app.use(cors())
const studentmodel=require("./studentSchema")

app.delete("/",async(req,resp)=>{
    var conn=await dbconect()
    var data=await conn.deleteOne({rollno:req.body.rollno})
    resp.send(data)
})
app.listen(5000)
