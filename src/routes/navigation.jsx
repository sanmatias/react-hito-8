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

const Navigation = () =>(

    <Router>
   <Navbar />
        <Routes>
        
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/p001" element={<Pizza />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/profile" element={<Profile/>}> </Route>
           
        </Routes>
        <Footer/>


    </Router>


)

export default Navigation