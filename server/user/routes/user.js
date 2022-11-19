const express=require("express")
const router=express.Router()
const signupModel=require("../modals/signupmodal")
const {generatePasswordHash}=require("../utility")
const {checkExistingUser}=require("../utility")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const crypto=require("crypto")


//const secretKey=crypto.randomBytes(64).toString("hex")
//const salt=6
router.post("/login",(req,res)=>{
    // res.status(200).send("login works")
    signupModel.find({username:req.body.username}).then((userData)=>{
        if(userData.length){
       bcrypt.compare(req.body.password,userData[0].password).then((val)=>{
          if(val){
const authToken=jwt.sign(userData[0].username,process.env.SECRETKEY)
res.status(200).send({authToken})
          }
          else{
            res.status(400).send("Invalid Password")
          }
       })
        }
        else{
            res.status(400).send("Unauthorized User")
        }
    })

})
router.post("/signup",async(req,res)=>{
   if(await checkExistingUser(req.body.username)){
    res.status(400).send("Username exist Please try With Different One")
   }
   else{
     generatePasswordHash(req.body.password).then((passwordHash)=>{
        // console.log(passwordHash)
        signupModel.create({username:req.body.username,phone_number:req.body.phoneNumber,password:passwordHash}).then(()=>{
                            res.status(200).send(`${req.body.username} added successfully...`)
                        }).catch((err)=>{
                    res.status(200).send(err.message)
                        })
        
     })
    // console.log(passwordHash)
//     bcrypt.genSalt(salt).then((saltHash)=>{
//          bcrypt.hash(req.body.password,saltHash).then((passwordHash)=>{
//             signupModel.create({username:req.body.username,phone_number:req.body.phoneNumber,password:passwordHash}).then(()=>{
//                 res.status(200).send(`${req.body.username} added successfully...`)
//             }).catch((err)=>{
//         res.status(200).send(err.message)
//             })
//          }).catch((err)=>{
// res.status(400).send(err)
//          })
//     }).catch((err)=>{
// res.status(400).send(err)
//     })
//     signupModel.create({username:req.body.username,phone_number:req.body.phoneNumber,password:req.body.password}).then(()=>{
//         res.status(200).send(`${req.body.username} added successfully...`)
//     }).catch((err)=>{
// res.status(200).send(err.message)
//     })
   }
})

router.post("/logout",(req,res)=>{
    res.status(200).send("logout works")
})
router.put("/updatepassword",(req,res)=>{
    signupModel.find({username:req.body.username}).then((user)=>{
if(user.length){
bcrypt.compare(req.body.oldpassword,user[0].password).then((isMatch)=>{
    if(isMatch){
        generatePasswordHash(req.body.newpassword).then((hashPassword)=>{
            signupModel.updateOne({username:req.body.username},{password:hashPassword}).then(()=>{
                res.status(200).send("Password Updated Successfully...")
            }).catch((err)=>{
                res.status(400).send(err)
            })
        })
        // signupModel.updateOne({username:req.body.username})
    }else{
        res.status(400).send("Old Password is incorrect")
    }
})
}else{
    res.status(400).send("Invalid User")
}
    })
})
module.exports=router