import React from 'react';
import Card from 'react-bootstrap/Card';
import './cardStyle.css'
import Button from 'react-bootstrap/Button';
import { PiEyesFill } from "react-icons/pi";
import { GiShoppingCart } from "react-icons/gi";
import { useContext,useEffect,useState } from 'react';
import { CartContext } from '../../contexts/cartContext';
import { useNavigate } from "react-router-dom";

function CardPizza(props){

  

  const navigate = useNavigate()
 // const [id,setId] = useState("")
  const navegarCard = (idPizza) =>{
    navigate("/pizza/"+idPizza)
  }

  const {agregar} = useContext(CartContext)

      return (       

        <> 
    
          <Card style={{ width: '18rem' ,height:'620px'}}>
            <Card.Img className='img' variant="top" src={props.img} />
            <Card.Body>
            <Card.Text className='titulo'>
           {props.name} 
              </Card.Text>
              <Card.Text className='titulo'>
           {props.desc} 
              </Card.Text>
              <Card.Text >
                <div className='subTitulo'>
                Ingredientes</div> <br />
                <div className='texto'>
                {props.ingrediets.join(", ")}
                </div>
              </Card.Text>
              <Card.Title className='precio'>Precio: ${props.price}</Card.Title>
<Card.Text className='botones'>
             
              <div>
            <Button variant="dark"  className='' onClick={()=>
              navegarCard(props.id)
              
              
              }> 
            Ver Más <PiEyesFill /></Button></div>
            <div>
            <Button variant="dark"  className='boton' onClick={() =>agregar(props.id)}> 
            Añadir <GiShoppingCart /> </Button>
            </div>
            </Card.Text>
            </Card.Body>    
          </Card>

       



          </>


      );
}

export default CardPizza