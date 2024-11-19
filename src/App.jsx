import './App.css'
import Footer from './footer/footer'
import Navbar from './navbar/navbar'
//import Home from './home/home'
//import Register from './register/register'
//import Login from './login/login'
import Cart from './cart/Cart'
function App() {

  return (
    <>
      <div className='headIndex'>
      <Navbar />
      </div>

{/*      
      <div>
        <Home />
      </div>

     <div>
      <Register />
     </div>
   
     <div>
     <Login />
      </div>
     */}
<div>
  <Cart/>
</div>


      <div>
        <Footer />
      </div>
    </>
    
  )
}

export default App
