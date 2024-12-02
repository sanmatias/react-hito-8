import { useContext, useEffect, useState } from "react";
import './cartStyle.css'
import Button from 'react-bootstrap/Button';
import { CartContext } from "../../contexts/cartContext";
import { FuncionesCartContext } from "../../contexts/funcionesCartContext";
function Cart(){


    const {sumar,restar,} = useContext(FuncionesCartContext)
    const {total,sumaTotal,pizzasCliente} =useContext(CartContext)

    useEffect(() => {
        sumaTotal(pizzasCliente)
      }, [pizzasCliente]);
      




    return (
        <div>
          {  
        pizzasCliente.map((pizza)=>
            (
        <li className="lista" key={pizza.id}> <img src={pizza.img} alt="" height={40} width={40}/>  <p>{pizza.name}</p>  
        
        <div className="precio"><p>{pizza.price}</p>  <Button onClick={() => restar(pizza.id,pizzasCliente)} className="botones">-</Button> <Button onClick={() =>sumar(pizza.id,pizzasCliente)} className="botones">+</Button> </div>
        </li> 
            ))}
<div>

        <h1> Total: </h1>
        <h1> {total}</h1>
        </div>
<Button variant="secondary"> pagar</Button>
        </div>
        )
}

export default Cart