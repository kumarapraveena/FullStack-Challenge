import axios from "axios"
import "./item.css"
import { Link } from "react-router-dom"
import { useEffect,useState} from "react"
const Items=()=>{
    const[items,setItems]=useState([])
    useEffect(()=>{
axios({
    method:"GET",
    url:"http://localhost:3003/item"
}).then((itemData)=>{
// console.log(itemData)
setItems(itemData.data.item)
}).catch((err)=>{
console.log(err)
})
    },[])
    const handleBuy=()=>{

    }
const handleCart=(item)=>{
console.log(item)
const payload={
    itemid:item.item_id
}
const authToken=localStorage.getItem("authorization")
fetch("http://localhost:3003/cart/add",{
    method:"POST",
    // url:"http://localhost:3003/cart/add",
    body:JSON.stringify(payload),
    headers:{
authorization:authToken,
'Content-Type':"application/json"
    }
}).then((data)=>data.json()).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
    }
    return(
<>
<div className="main">
    {
        items.map((item)=>{
return(
<div className="item-card">
<div className="item-heading">
    {item.item_name}
</div>
<div className="item-price">
    {`Rs.${item.discounted_price}`}
</div>
<Link to="/cart"><button type="button" onClick={()=>{handleCart(item)}}>Add to Cart</button></Link>
<button type="button" onClick={handleBuy}>Buy Now</button>
</div>
)
        })
    }
{/* <div className="item-card">
<div className="item-heading">
    {}
</div>
<div className="item-price">
    {}
</div>
<button type="button" onClick={handleCart}>Add to Cart</button>
<button type="button" onClick={handleBuy}>Buy Now</button>

</div> */}
</div>
</>
    )
}
export default Items