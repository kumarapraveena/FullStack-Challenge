const express=require("express")
const orderModal=require("../modals/order-modal")
const router=express.Router()
const jwt=require("jsonwebtoken")
router.get("/",(req,res)=>{
    //console.log(req.headers,process.env.SECRETKEY)
    try{
    const user=jwt.verify(req.headers.authorization,process.env.SECRETKEY)
    res.status(200).send(user)
    }
    catch{
        res.status(403).send("User Not Authorized",err)
    }
})
router.post("/add",(req,res)=>{
    orderModal.create({username:req.body.username,order_id:req.body.order_id,order_type:req.body.order_type,item_id:req.body.itemid}).then(()=>{
        res.status(200).send("Order Placed Successfully")
    }).catch((err)=>{
        res.status(400).send(err)
    })
})
router.delete("/cancel/:id",(req,res)=>{
orderModal.deleteOne({order_id:req.params.id}).then(()=>{
    res.status(200).send("Order Cancelled Successfully...")
}).catch((err)=>{
    res.status(400).send(err)
})
})
module.exports=router