const express=require('express');
const app=express();
app.use(express.json());
const port=9000;
app.get("/",(req,res)=>{
res.send("hello werd")
})
app.get("/data",(req,res)=>{
    res.status(201).send(req.body)
})
app.listen(port,()=>{
console.log(`server work on port no ${port}`);
})

module.exports=app