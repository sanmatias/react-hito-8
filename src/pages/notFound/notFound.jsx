import Header from "../header/header"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
function NotFound(){


    return (
        <>
      
        <div style={{textAlign:'center'}}> 
        <h1>PAGINA NO ENCONTRADA</h1>
        <p>Por favor vuelva a home</p>
        <Link to="/">
        <Button> Home</Button></Link>
        </div>
        </>
    )
}
export default NotFound