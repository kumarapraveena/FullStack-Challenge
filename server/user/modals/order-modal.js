const mongoose=require("mongoose")
const orderSchema=new mongoose.Schema({
username:{
    type:String,
    required:true
},
order_id:{
    type:String,
    required:true,
    // maxLength:10,
    // required:true
},
password:{
    type:String,
    required:true
},
item_id:{
    type:String,
    required:true
},
// order_status:{
//     type:String,
//     required:true
// }
})
const orderModal=mongoose.model("order-model",orderSchema)
module.exports=orderModal;