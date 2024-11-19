import { useState,useEffect } from "react";
import pizzaCard from "../pizzaCard/pizzaCard";
import './cartStyle.css'
import Button from 'react-bootstrap/Button';
function Cart(){
    const pizzas = pizzaCard()
    const [pizzasCliente, setPizza] = useState(pizzas);
    const [total,setTotal] = useState(0);



    
    useEffect(() =>{
        const suma = pizzasCliente.reduce((total,pizza) => total + pizza.price, 0);
        setTotal(suma)
    }, [pizzasCliente])

    const findValueById= async (idPrecio) =>{
        let valorPizza= 0
        
        pizzas.forEach((pizza)=>{  
            if(pizza.id ==idPrecio){
                valorPizza = pizza.price
            }})
        return valorPizza
    }
    const sumar = async (id) =>{
        let valorUnidad = 0
        valorUnidad = await findValueById(id)
        setPizza(pizzasCliente.map((pizza)=>
        pizza.id == id ?
        
        {...pizza,price: pizza.price +valorUnidad} : pizza
        ))
valorTotal(pizzasCliente)
    }



    const restar = async (id) =>{
        let valorUnidad = 0
        valorUnidad = await findValueById(id)
        console.log(valorUnidad)
        setPizza(pizzasCliente.map((pizza)=>{  
            if(pizza.id == id ){
                let precioFinal = pizza.price - valorUnidad;
                             
                return {...pizza,price: precioFinal} 
            }
            return pizza
        }
            
      
        ).filter(((pizza)=> pizza.price >0))) 
    valorTotal()
    }
 


    return (
        <div>
          {  
        pizzasCliente.map((pizza)=>
            (
        <li className="lista"> <img src={pizza.img} alt="" height={40} width={40}/>  <p>{pizza.name}</p>  
        
        <div className="precio"><p>{pizza.price}</p>  <Button onClick={() =>restar(pizza.id)} className="botones">-</Button> <Button onClick={() =>sumar(pizza.id)} className="botones">+</Button> </div>
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