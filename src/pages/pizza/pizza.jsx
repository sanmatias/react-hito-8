import { useEffect,useState,useContext } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { PiEyesFill } from "react-icons/pi";
import { GiShoppingCart } from "react-icons/gi";
import { CartContext } from "../../contexts/cartContext";


function Pizza() {
  const {agregar} = useContext(CartContext)
  const {id} = useParams()
    const [ pizza,setPizza] =useState({})

    useEffect(() =>{
        const obtenerPizzas = async () =>{
          const idPizza = id
            const url = " http://localhost:5000/api/pizzas/"+idPizza
            const response = await fetch(url)
            const data = await response.json()
            setPizza(data)  }
         obtenerPizzas()
    },[])



return ( 

    < >
    <Card style={{ width: '18rem' ,height:'630px'}}>
    <Card.Img variant="top" src={pizza.img} width={ '300px'}/>
    <Card.Body>
      <Card.Title >{pizza.name}</Card.Title>
      <Card.Text>
        {pizza.desc}
      </Card.Text>
      <Card.Text>
        Precio: ${pizza.price}
      </Card.Text>
      <Card.Text>
        Ingredientes: { pizza.ingredients?.join(", ")}
      </Card.Text>
      <Card.Text style={{display:"flex"}}>
      <div><Link to="/">
            <Button variant="dark"  className='' > 
            Regresar <PiEyesFill /></Button></Link></div>
            <div>
            <Button variant="dark"  className='boton' onClick={() =>agregar(id)   }> 
            Añadir <GiShoppingCart /> </Button>
            </div>
            </Card.Text>
    </Card.Body>
  </Card>

  </>
)
}

export default Pizza