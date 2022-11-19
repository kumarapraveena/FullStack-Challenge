const express=require("express")
const multer=require("multer")()
const cors=require("cors")
const jwt=require("jsonwebtoken")
const orderController=require("./user/routes/orders")
const app=express()
const userController=require("./user/routes/user")
const cartController=require("./user/routes/cart")
const itemController=require("./user/routes/items")
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(multer.array())
app.use(cors())
const unprotectedRoutes=["/user/login","/user/signup"]
//app.use((req,res,next)=>{
// console.log(req)
// unprotectedRoutes.forEach((route)=>{
// if(req.url.includes(route)){
//     next()
// }
// else{
//      const user=jwt.verify(req.headers.authorization,process.env.SECRETKEY)
// }
// })
// const user=jwt.verify(req.headers.authorization,process.env.SECRETKEY)
// next()
// console.log(req.headers,"From Middleware")
//})
app.listen(3003,(err)=>{
if(!err){
    console.log("Server Started at port 3003")
}
else{
    console.log(err)
}
})
app.get("/",(req,res)=>{
    res.send("Ecommerce Backend")
})
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce-asthana",(data)=>{
console.log("Connection Done Successfully...")
},(err)=>{
console.log(err)
})
app.use("/user",userController)
app.use("/order",orderController)
app.use("/cart",cartController)
app.use("/item",itemController)