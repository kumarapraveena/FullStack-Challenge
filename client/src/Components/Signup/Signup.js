import React from "react"
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
const Signup=()=>{
    const navigate=useNavigate()
  const[signuUpState,setSignUpState]=useState({});
    const signUpFormData=[{attr:"username",type:"text",id:"username",label:"Username:"},{attr:"phone_number",type:"text",id:"phoneNumber",label:"Mobile Number:"},
    {attr:"password",type:"password",id:"password",label:"Password:"}]
    const handleUseradd=()=>{
            console.log(signuUpState)
            axios({
                url:"http://localhost:3003/user/signup",
                method:"POST",
                headers:{

                },
                data:signuUpState
            }).then((res)=>{
window.alert(res.data)
navigate("/login")
            }).catch((err)=>{
            window.alert(err.response.data)
            })
    }
    const handleInputChange=(e,id)=>{
        if(id==="phoneNumber"){
            e.target.value=parseInt(e.target.value)
        }
setSignUpState({...signuUpState,[id]:e.target.value})
    }
    return(
       <>
        <div>
            <form>
{signUpFormData.map((formKey)=>{
return (<div>
<div>
    <label for={formKey.id}>{formKey.label}</label>
</div>
<div>
    <input type={formKey.type} id={formKey.id} onChange={(e)=>{handleInputChange(e,formKey.id)}}/>
</div>
</div>)
})}
            </form>
            <button type="button" onClick={handleUseradd}>Submit</button>
        </div>
        </>
    )
}
export default Signup