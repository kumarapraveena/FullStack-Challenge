import {useNavigate} from "react-router-dom"

const LogOut=()=>{
    const navigate=useNavigate();
    const handleLogOut=()=>{
        localStorage.setItem("authorization","")
        navigate("/")
    }
    return(
        <>
        <button onClick={handleLogOut}>Logout</button>
        </>
    )
}
export default LogOut