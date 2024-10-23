import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import './loginStyle.css' 
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


function mensajeSwal(titulo,mensaje,icono){
    Swal.fire({
        title:titulo,
        text:mensaje,
        icon:icono
       }
    )
}

let usuario = [{email:'correo@dominio.cl',contraseña:'123456'}];

function Login(){
    const [email,setEmail] = useState('');
    const [contraseña,setContraseña] = useState('');

    const validarRegistro = (e) =>{
        e.preventDefault();
        if(!email.trim() || !contraseña.trim() ){
            mensajeSwal('Error','Los campos no pueden estar vacios','error')
           console.log(usuario.email)
           
        }else{
            if(contraseña.length<6){
                mensajeSwal('Error','La contraseña debe tener más de 5 caracteres','error')
            }else{if(email ==usuario[0].email && contraseña ==usuario[0].contraseña){
                    mensajeSwal('Logrado','Los datos son correctos: '+usuario[0].email,'success')
                }else{
                    mensajeSwal('Error','La contraseña o el correo no se encuentra','error')
                }
                    
                }
            }
        
        }

return(
    <> 
    <div className='master'>
        <div> </div>
    <div className='cuadrado'>
        
    <div className='login'>
    <h2>Inicio de Sesión</h2>
    <Form onSubmit={validarRegistro}>
        <Form.Group as='Row'>
    <Form.Label column sm="2">Correo</Form.Label>
    <Col sm="10">
   <Form.Control
        type="email"
        id="email"
        name="email"
   placeholder="correo@dominio.cl"
   
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
        placeholder='123456'
        onChange={(e) => setContraseña(e.target.value)}
        value={contraseña}
      />
      </Col>

      
      


      </Form.Group>
      <Button type='submit' variant="dark" id='boton'>Enviar</Button>
      </Form>
   </div>  
   <div className='segundaOpcion'>
    <a href="" className='sub'>
    <div><FaFacebook />Iniciar con Facebook</div></a>
<a href="" className='sub'>   <div><FcGoogle /> Iniciar con Google</div></a>
   </div>
   </div>
   </div>
    </>
)
}
export default Login