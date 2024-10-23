import Button from 'react-bootstrap/Button';
import './styleNavbar.css'
import { CiPizza } from "react-icons/ci";
import { FcLock } from "react-icons/fc";
import { GiShoppingCart } from "react-icons/gi";
import React, { useState } from 'react';



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
        <Button variant="dark" className='navbar botonIzquierda'>
        <FcLock /> Profile</Button>
        <Button variant="dark" className='navbar botonIzquierda' onClick={toggleVisibilidad}>
          <FcLock /> Logout</Button>
          </>
        ):(
          <>
            <Button variant="dark"  className='navbar botonIzquierda' onClick={toggleVisibilidad}> 
<FcLock /> login</Button>

 <Button variant="dark"  className='navbar botonIzquierda'> 
 <FcLock /> register</Button>  
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
 
  <Button variant="dark"  className='navbar botonIzquierda'> 
  <CiPizza /> home</Button>


  {Mostrar()}
<div style={{ display: token ? 'none' : 'block' }}>
        

 </div>
</div><div></div>
        <div className='derecha'>
    <Button variant="dark" size="sm" className='navbar'> 
    <GiShoppingCart /> total: {total}</Button>
    </div>
   

    </div>
  );
}

export default Navbar;