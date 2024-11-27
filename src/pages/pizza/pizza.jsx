import { useEffect,useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Pizza() {
    const [ pizzas,setPizzas] =useState({})

    useEffect(() =>{
        const obtenerPizzas = async () =>{
            const url = " http://localhost:5000/api/pizzas/p001"
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            setPizzas(data) 
            

        }
         obtenerPizzas()

    },[])



return ( 

    <>

    <Card style={{ width: '18rem' ,height:'550px'}}>
    <Card.Img variant="top" src={pizzas.img} width={ '300px'}/>
    <Card.Body>
      <Card.Title >{pizzas.name}</Card.Title>
      <Card.Text>
        {pizzas.desc}
      </Card.Text>
      <Card.Text>
        Precio: ${pizzas.price}
      </Card.Text>
      <Card.Text>
        Ingredientes: { pizzas.ingredients?.join(", ")}
      </Card.Text>
      
      <Button variant="secondary">Comprar</Button>
    </Card.Body>
  </Card>

  </>
)
}

export default Pizza