import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import foto from '../profile/foto.png'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { TokenContext } from '../../contexts/tokenContext';
import { useContext, useEffect } from 'react';
function Profile (){
const {getUser,setUser,user,logout} = useContext(TokenContext)

useEffect(()=>getUser)
    return (
     
        <>
       
        <div>
        <Card style={{ width: '100rem',alignItems: 'center',display:'flex',alignContent:'center',marginLeft:'150px' }}>
      <Card.Img variant="top" src={foto} style={{width:'200px',marginRight:'60px'}}/>
      <Card.Body>

        <Card.Text>
        <p>Nombre </p> <Form.Control type="text" placeholder="Normal text" value={"Jhony "+user.email.slice(0,4)} block/>
          <p>Correo </p>  <Form.Control type="text" placeholder="Normal text" value={user.email|| "sin correo"} block/>
        </Card.Text>
        <Link to="/home">
        <Button style={{marginTop:'20px'}} variant="primary" onClick={logout}>Cerrar sesión</Button></Link>
      </Card.Body>
    </Card>
        </div>
        </>
    )
}

export default Profile