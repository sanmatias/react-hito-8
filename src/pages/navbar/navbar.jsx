import Button from 'react-bootstrap/Button';
import './styleNavbar.css'
import { CiPizza } from "react-icons/ci";
import { FcLock } from "react-icons/fc";
import { GiShoppingCart } from "react-icons/gi";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Mostrar() {
  // Definimos el estado "visible", inicialmente true
  const [visible, setVisible] = useState(true);

  // Función para alternar el valor de visible
  const toggleVisibilidad = () => {
    setVisible(!visible);  // Cambia el estado entre true y false
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
    const total = 25000;
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