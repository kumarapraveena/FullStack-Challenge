const mongoose=require("mongoose")
const signupSchema=new mongoose.Schema({
username:{
    type:String,
    required:true
},
phone_number:{
    type:Number,
    minLength:10,
    maxLength:10,
    required:true
},
password:{
    type:String,
    minLength:6,
    required:true
}
})
const signupModel=mongoose.model("sign-up-model",signupSchema)
module.exports=signupModel;