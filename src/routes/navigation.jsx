import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Navbar from "../pages/navbar/navbar";
import NotFound from "../pages/notFound/notFound";
import Register from "../pages/register/register";
import Pizza from "../pages/pizza/pizza";
import Cart from "../pages/cart/Cart";
import Footer from "../pages/footer/footer";
import Profile from "../pages/profile/profile";
import { useContext } from "react";
import { TokenContext } from "../contexts/tokenContext";

const Navigation = () =>{
    const {token} = useContext(TokenContext) 
    console.log(token)
    return(
 
    <Router>
       
   <Navbar />
        <Routes>
   
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={!token? <Register />:<Home />} />
            <Route path="/login" element={!token?<Login /> :<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/profile" element={!token? <Login /> :<Profile/>} /> 
           
        </Routes>
        <Footer/>


    </Router>


)}

export default Navigation