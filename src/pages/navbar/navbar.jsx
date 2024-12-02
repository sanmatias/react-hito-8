import React from 'react';
import Button from 'react-bootstrap/Button';
import './styleNavbar.css'
import { CiPizza } from "react-icons/ci";
import { FcLock } from "react-icons/fc";
import { GiShoppingCart } from "react-icons/gi";
import { useState,useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FuncionesCartContext } from '../../contexts/funcionesCartContext';
import { CartContext } from '../../contexts/cartContext';


function Mostrar() {

  const [visible, setVisible] = useState(true);

  // Función para alternar el valor de visible
  const toggleVisibilidad = () => {
    setVisible(!visible);  
  };
    return (
     <>
        {visible ? (
          <>
          <Link to="/profile">
        <Button variant="dark" className='navbar botonIzquierda'>
        <FcLock /> Profile</Button></Link>
        <Button variant="dark" className='navbar botonIzquierda' onClick={toggleVisibilidad}>
          <FcLock /> Logout</Button>
          </>
        ):(
          <>
          <Link to="/login">
            <Button variant="dark" to="login"  className='navbar botonIzquierda' onClick={toggleVisibilidad}> 
<FcLock /> login</Button></Link>
<Link to="/registro">
 <Button variant="dark"  className='navbar botonIzquierda'> 
 <FcLock /> register</Button>  </Link>
          </>    
        )}
     </>
    );
  
}



function Navbar() {
  const {pizzasCliente,total,sumaTotal} = useContext(CartContext)
 

  useEffect(() => {
    sumaTotal(pizzasCliente)
  }, [pizzasCliente]);
 
    const token = false;
  return (
    <div className='navbar'>
       <div className='izquierda'><p className='mensaje'>Pizzeria Mamma Mia!</p>
 <Link to="/">
  <Button variant="dark"  className='navbar botonIzquierda'> 
  <CiPizza /> home</Button></Link>


  {Mostrar()}
<div style={{ display: token ? 'none' : 'block' }}>
        

 </div>
</div><div></div>
        <div className='derecha'>
    <Link to="/cart">
    <Button variant="dark" size="sm" className='navbar'> 
    <GiShoppingCart /> total: {total}</Button> </Link>
    </div>
   

    </div>
  );
}

export default Navbar;