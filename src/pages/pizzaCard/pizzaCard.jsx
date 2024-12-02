import { useEffect } from "react"
function pizzaCard(){
    


   //useEffect(()=>)
 const obtenerPizzas = async () =>{
    const url = " http://localhost:5000/api/pizzas"
    const response = await fetch(url)
    const data = await response.json()
    //console.log(data)
    return data
 }


    return (
obtenerPizzas()
        )}

export default pizzaCard