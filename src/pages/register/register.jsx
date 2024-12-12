import { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import './registerStyle.css' 

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TokenContext } from '../../contexts/tokenContext';


function mensajeSwal(titulo,mensaje,icono){
    Swal.fire({
        title:titulo,
        text:mensaje,
        icon:icono
       }
    )
}

function Register(){
    const {register} = useContext(TokenContext)
    const [email,setEmail] = useState('');
    const [contraseña,setContraseña] = useState('');
    const [contraseñaValidacion,setContraseñaValidacion] = useState('')
    
    const validarRegistro = (e) =>{
        e.preventDefault();
        if((!email.trim() || !contraseña.trim()) || !contraseñaValidacion.trim() ){
            mensajeSwal('Error','Los campos no pueden estar vacios','error')
           
           
        }else{
            if(contraseña.length<6){
                mensajeSwal('Error','La contraseña debe tener más de 5 caracteres','error')
            }else{
                if(contraseña==contraseñaValidacion){
                    mensajeSwal('Logrado','Los datos son correctos','success')
                }else{
                    mensajeSwal(  'Error','Los campos de contraseña deben ser iguales','error')
                }
            }
        }
        }

return(
    <> 
    <div className='master'>
        <div> </div>
    <div className='cuadrado'>
        
    <div className='registro'>
    <h2>Registro de usuario</h2>
    <Form onSubmit={(e)=> register(e,email,contraseña)}>
        <Form.Group as='Row'>
    <Form.Label column sm="2">Correo</Form.Label>
    <Col sm="10">
   <Form.Control
        type="email"
        id="email"
        name="email"
   placeholder="name@example.com"
   onChange={(e) => setEmail(e.target.value)}
   value={email}
      /> 
      </Col>

   <Form.Label htmlFor="inputPassword5" column sm="2">Contraseña</Form.Label>
   <Col sm="10">
      <Form.Control
        type="password"
        name="contraseña"
        aria-describedby="passwordHelpBlock"
        onChange={(e) => setContraseña(e.target.value)}
        value={contraseña}
      />
      </Col>

      <Form.Label htmlFor="inputPassword5" column sm="2">Valida la Contraseña</Form.Label>
   <Col sm="10">
      <Form.Control
        type="password"
        name="contraseñaValidacion"
        aria-describedby="passwordHelpBlock"
        onChange={(e) => setContraseñaValidacion(e.target.value)}
        value={contraseñaValidacion}
      />
      </Col>
      


      </Form.Group>
      <Button type='submit' variant="dark" id='boton'>Enviar</Button>
      </Form>
   </div>  
   <div className='segundaOpcion'>
    <a href="" className='sub'>
    <div><FaFacebook />Registrar con Facebook</div></a>
<a href="" className='sub'>   <div><FcGoogle /> Registrar con Google</div></a>
   </div>
   </div>
   </div>
    </>
)
}
export default Register