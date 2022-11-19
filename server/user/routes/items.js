const express=require("express")
const router=express.Router()
const itemModel=require("../modals/item-modal")
router.get("/",(req,res)=>{
    itemModel.find().then((itemData)=>{
        res.status(200).send({item:itemData})
    })
})
router.post("/add",(req,res)=>{
    itemModel.insertMany(req.body.items).then((itemData)=>{
        res.status(200).send({itemData})
    })
})
module.exports=router