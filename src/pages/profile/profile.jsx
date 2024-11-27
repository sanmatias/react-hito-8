import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import foto from '../profile/foto.png'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
function Profile (){


    return (
        <>
        <div>
        <Card style={{ width: '100rem',alignItems: 'center',display:'flex',alignContent:'center',marginLeft:'150px' }}>
      <Card.Img variant="top" src={foto} style={{width:'200px',marginRight:'60px'}}/>
      <Card.Body>

        <Card.Text>
        <p>Nombre </p> <Form.Control type="text" placeholder="Normal text" value={"Ricado Escamilla"} block/>
          <p>Correo </p>  <Form.Control type="text" placeholder="Normal text" value={"ricardoe@gmail.com"} block/>
        </Card.Text>
        <Link to="/home">
        <Button style={{marginTop:'20px'}} variant="primary">Cerrar sesión</Button></Link>
      </Card.Body>
    </Card>
        </div>
        </>
    )
}

export default Profile