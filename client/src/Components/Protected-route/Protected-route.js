import { Navigate } from "react-router-dom";
const Protected=({children})=>{
    const token=localStorage.getItem("authorization");
return(
    <>
{token.length?children:<Navigate to="/signup"/>}
    </>
)
}
export default Protected