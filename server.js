import express from "express"
const app = express()
const port = process.env.PORT||4000

app.get('/',(req,res)=>{
    res.send('first page');
})

app.listen(port,()=>{
    console.log("Connect Successfully on port:"+port)
})