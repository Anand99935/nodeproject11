const express=require("express")
const cors=require("cors")
const app=express()
require("./mongoose")
app.use(express.json())
app.use(cors())
const studentmodel=require("./studentSchema")

app.delete("/",async(req,resp)=>{
//const data=await new studentmodel(req.body)
    const result=await studentmodel.deleteOne({rollno:req.body.rollno})
    resp.send(result)
}
)
app.listen(5000)  
