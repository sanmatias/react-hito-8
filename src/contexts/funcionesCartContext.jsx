import { useContext,createContext } from "react"
import pizzaCard from "../pages/pizzaCard/pizzaCard";
export const FuncionesCartContext = createContext({})
const pizzas = await pizzaCard()
import { CartContext } from "./cartContext";
const FuncionesProvider = ({children}) =>{
const {setPizza} = useContext(CartContext)


    const findValueById= async(idPrecio)  =>{
        let valorPizza= 0 
        pizzas.forEach((pizza)=>{  
            if(pizza.id ==idPrecio){
                valorPizza = pizza.price
            }})                 
        return valorPizza}

        const sumar = async (id,listaPizza) =>{
            let valorUnidad = 0
            valorUnidad = await findValueById(id)
            console.log(listaPizza)
            setPizza(listaPizza.map((pizza)=>    
            pizza.id === id ?  
            {...pizza,price: pizza.price +valorUnidad} : pizza
            ))}


            

            const restar = async (id,listaPizza) =>{
                let valorUnidad = 0
                valorUnidad = await findValueById(id)
                setPizza(listaPizza.map((pizza)=>{  
                    if(pizza.id == id ){
                        let precioFinal = pizza.price - valorUnidad;
                        return {...pizza,price: precioFinal} 
                    }
                    return pizza
                }
                ).filter(((pizza)=> pizza.price >0))) }
         
                return (
                    <FuncionesCartContext.Provider value={{restar,sumar}}>
                           {children}
                    </FuncionesCartContext.Provider>
                )}
    export default FuncionesProvider