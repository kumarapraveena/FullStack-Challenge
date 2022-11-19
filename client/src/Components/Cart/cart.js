import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import LogOut from "../logOut/logOut"
const Cart=()=>{
    const authToken=localStorage.getItem("authorization")
    const[cartData,setCardData]=useState([])
    useEffect(()=>{
fetch("http://localhost:3003/cart",{
    headers:{
        authorization:authToken
    }
}).then((res)=>res.json()).then((data)=>{
    // console.log(data,"cartdata")
    setCardData(data.cart)
})
    },[])
return(
    <>

  {  authToken.length?
    <section>
Cart:{cartData.length}<br/>
<LogOut/>
    </section>:
    <section>
        <div>User Not Logged In Please login or signup</div>
        <Link to="/signup">Signup</Link>
    </section>
}
</>
)
}
export default Cart