import React from "react";
import { useContext,useState,useEffect, createContext } from "react";
export const CartContext = createContext({})
import pizzaCard from "../pages/pizzaCard/pizzaCard";
const pizzas = await pizzaCard()

const CartProvider = ({children}) =>{
    
    const [pizzasCliente, setPizza] = useState([]);
    const [total,setTotal] = useState(0);

    useEffect(()=>{sumaTotal(pizzasCliente)}, [pizzasCliente])

    const sumaTotal = (listaPizza) =>{
        const suma = listaPizza.reduce((total,pizza) => total + pizza.price, 0);
        setTotal(suma)
    }

    const agregar = (id) =>{
        if(!pizzasCliente.some(pizza=> pizza.id ==id )){    
            pizzasCliente.push(pizzas.find(pizza=> pizza.id ==id))        
        } 
        }
    


return (
    <CartContext.Provider value={{total,pizzasCliente,sumaTotal,setPizza,agregar}}>
        {children}
    </CartContext.Provider>
)

}

export default CartProvider