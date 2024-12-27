import express from "express"
import { router } from "./routes/productRoutes.js"
const app = express()
const port = process.env.PORT||4000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',router)

// app.get('/',(req,res)=>{
//     res.send('first page');
// })

app.listen(port,()=>{
    console.log("Connect Successfully on port:"+port)
})