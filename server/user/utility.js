const signupModel=require("./modals/signupmodal")
const bcrypt=require("bcryptjs")
 const checkExistingUser=async(username)=>{
    let existingUser=false;
    await signupModel.find({username:username}).then((userData)=>{
if(userData.length){
    existingUser=true
}
    })
return existingUser
}
const generatePasswordHash=(password)=>{
    const salt=10;
    // let hash='';
    return new Promise((resolve,reject)=>{
         bcrypt.genSalt(salt).then((hashSalt)=>{
            bcrypt.hash(password,hashSalt).then((passwordHash)=>{
resolve(passwordHash)
            })
        })
    })
}
module.exports={checkExistingUser,generatePasswordHash}