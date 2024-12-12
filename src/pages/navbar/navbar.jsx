import React from 'react';
import Button from 'react-bootstrap/Button';
import './styleNavbar.css'
import { CiPizza } from "react-icons/ci";
import { FcLock } from "react-icons/fc";
import { GiShoppingCart } from "react-icons/gi";
import { useState,useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cartContext';
import { TokenContext } from '../../contexts/tokenContext';

function Mostrar() {
  const {terminoSesion,iniciarSesion,token,logout} = useContext(TokenContext)

  // Función para alternar el valor de visible

    return (
     <>
        {!token ? (
          <>
           <Link to="/">
  <Button variant="dark"  className='navbar botonIzquierda'> 
  <CiPizza /> home</Button></Link>
          <Link to="/login">
            <Button variant="dark" to="login"  className='navbar botonIzquierda' > 
<FcLock /> login</Button></Link>
<Link to="/registro">
 <Button variant="dark"  className='navbar botonIzquierda'> 
 <FcLock /> register</Button>  </Link>
  
          </>
        ):(
          
          <>
        

 <Link to="/">
  <Button variant="dark"  className='navbar botonIzquierda'> 
  <CiPizza /> home</Button></Link>
        
          <Link to="/profile">
        <Button variant="dark" className='navbar botonIzquierda'>
        <FcLock /> Profile</Button>
        </Link>
        
        <Button variant="dark" className='navbar botonIzquierda' onClick={logout}>
          <FcLock /> Logout</Button>
   
          </>    
        )}
     </>
    );
  
}



function Navbar() {
  const {pizzasCliente,total,sumaTotal} = useContext(CartContext)
  const {iniciarSesion,token} = useContext(TokenContext)

  useEffect(() => {
    sumaTotal(pizzasCliente)
  }, [pizzasCliente]);
 

  return (
    <div className='navbar'>
       <div className='izquierda'><p className='mensaje'>Pizzeria Mamma Mia!</p>



  {Mostrar()}
<div style={{ display: token ? 'none' : 'block' }}>
        

 </div>
</div><div></div>
<div className='derecha'>
    <Link to="/cart">
    <Button variant="dark" size="sm" className=' btnright'> 
    <GiShoppingCart /> total: {total} </Button> </Link>
    </div>

    </div>
  );
}

export default Navbar;