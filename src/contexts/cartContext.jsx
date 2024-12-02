import { useContext,useState,useEffect, createContext } from "react";
export const CartContext = createContext({})

const CartProvider = ({children}) =>{
    const [pizzasCliente, setPizza] = useState([]);
    const [total,setTotal] = useState(0);

    useEffect(()=>{sumaTotal(pizzasCliente)}, [pizzasCliente])

    const sumaTotal = (listaPizza) =>{
        const suma = listaPizza.reduce((total,pizza) => total + pizza.price, 0);
        setTotal(suma)
    }

    const agregar = (id,listaPizza,pizzas) =>{
        if(!listaPizza.some(pizza=> pizza.id ==id )){    
            listaPizza.push(pizzas.find(pizza=> pizza.id ==id))
         
        }
       
    }


return (
    <CartContext.Provider value={{total,pizzasCliente,sumaTotal,setPizza,agregar}}>
        {children}
    </CartContext.Provider>
)

}

export default CartProvider