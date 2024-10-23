import Card from 'react-bootstrap/Card';
import './cardStyle.css'
import Button from 'react-bootstrap/Button';
import { PiEyesFill } from "react-icons/pi";
import { GiShoppingCart } from "react-icons/gi";
function CardPizza(props){


    
      return (
        
          <Card>
            <Card.Img className='img' variant="top" src={props.img} />
            <Card.Body>
            <Card.Text className='titulo'>
           {props.name} 
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
            <Button variant="dark"  className=''> 
            Ver Más <PiEyesFill /></Button></div>
            
            <div>
            <Button variant="dark"  className='boton'> 
            Añadir <GiShoppingCart /> </Button>
            </div>
           
            </Card.Text>
            </Card.Body>
         
          </Card>
      );
}

export default CardPizza