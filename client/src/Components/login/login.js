import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
const Login=()=>{
    const [login,setLogin]=useState({userName:"",password:""})
    const navigate=useNavigate()
    const handleLogin=()=>{
        // const navigate=useNavigate()
        axios({
          url:"http://localhost:3003/user/login",
          method:"POST",
          headers:{

          },
          data:{username:login.userName,password:login.password} 
        }).then((loginData)=>{
// window.alert(res.data)
console.log(loginData)
localStorage.setItem("authorization",loginData.data.authToken)
document.cookie=`authToken:${loginData.data.authToken}`
// navigate("/items")
        }).catch((err)=>{
window.alert(err.response.data)
navigate("/")
        })
        navigate("/items")
    }
return(
    <>
    <div>
        <form>
            <div>
<div>
    <label for="username">Username:</label>
    </div>
    <div>
        <input id="username" type="text" onChange={(e)=>{setLogin({...login,userName:e.target.value})}}/>
    </div>
    <div>
    <label for="password">Password:</label>
    </div>
    <div>
        <input  id="password" onChange={(e)=>{setLogin({...login,password:e.target.value})}} type="password" />
    </div>

</div>
<button type="button" onClick={handleLogin}>Login</button>
        </form>
    </div>
    </>
)
}
export default Login