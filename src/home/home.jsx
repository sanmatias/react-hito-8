import CardPizza from "../cardPizza/cardPizza";
import './homeStyle.css'
import Header from "../header/header";
import { useState,useEffect } from "react";
//import pizzaCard from "../pizzaCard/pizzaCard";


function Home(){



    const [ listaPizza,setPizzas] =useState([])
 
    useEffect(() =>{
        const obtenerPizzas = async () =>{
            const url = " http://localhost:5000/api/pizzas"
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            setPizzas(data) 
            
    
        }
         obtenerPizzas()
    
    },[])
    
    




    return(
        <div>
        <div>
        <Header />
      </div>

        <div className="grilla">
    {listaPizza.map((pizza,indice) =>
    <CardPizza  className="card"
    name={pizza.name}
    price={pizza.price}
    desc={pizza.desc}
    img={pizza.img}
    ingrediets={pizza.ingredients}

    />
    )}
    </div>
    </div>
    )
    
}
 
export default Home;