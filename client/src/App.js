import logo from './logo.svg';
import './App.css';
// import {useHistory} from "react-router-dom"
import Signup from './Components/Signup/Signup';
import Login from './Components/login/login';
import LogOut from './Components/logOut/logOut';
import Orders from './Components/Orders/Order';
import Items from './Components/Itemlists/items';
import Protected from './Components/Protected-route/Protected-route';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Cart from './Components/Cart/cart';
function App() {
  return (
    <div className="App">
      {/* <Signup/>
      <Login/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/logout" element={<LogOut/>}></Route>
        <Route path="/orders" element={<Protected><Orders/></Protected>}></Route>
        {/* <Route path="/orders" element={localStorage.getItem('authorization')?<Orders/>:<Signup/>}></Route> some issue because of headers */}
         {/* <Route path="/orders" element={localStorage.getItem('authorization')?<Orders/>:<Navigate to="/signup"/>}></Route> every time logic will be repeated*/}
         <Route path="/items" element={<Items/>}></Route>
         <Route path="/cart" element={<Cart/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
