import { createContext,useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
export const TokenContext = createContext()
const localHost = "http://localhost:5000"
import Swal from 'sweetalert2';
import { CartContext } from "./cartContext";
function mensajeSwal(titulo,mensaje,icono){
    Swal.fire({
        title:titulo,
        text:mensaje,
        icon:icono
       })
}

const TokenProvider = ({children}) => {
    const {setPizza} = useContext(CartContext)
    const [token ,setToken ] =useState(false)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [user,setUser] = useState({email:"correo",id:"123"})


    const login = async (e) =>{
        e.preventDefault();
        const response = await fetch(localHost+"/api/auth/login",
            { method: "POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({email,password}),
    })
    const data = await response.json();
    console.log(data)
    //alert(data?.error || "Authentication successful!")
    localStorage.setItem("token",data.token);
    localStorage.setItem("email",data.email);
    setToken(true)
    mensajeSwal("Logrado","Su usuario ha sido creado","success")
    useNavigate("/")
}


const logout = async ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("email")
    setEmail()
    setPassword()
    setToken(false)
    useNavigate("/")
}
const getUser = async()=>{
    const tokenAuth = localStorage.getItem("token")
    if(tokenAuth){
     fetch(localHost+"/api/auth/me",{
        headers: {
            Authorization: 'Bearer '+tokenAuth,
        }, 
    }).then((response)=>response.json()).then((data)=>setUser(data))
}else{
    console.log("no hay usuuario")
    useNavigate("/")
}}

const register = async (e,email,password)=>{
    e.preventDefault();
    try{
        fetch(localHost+"/api/auth/register",{
            method:"POST",
            headers:{
    "Content-Type":"application/json",
    
            },
            body:JSON.stringify({email,password}),
        });
        mensajeSwal("Logrado","Su usuario ha sido registrado","success")
    }catch(error){
console.log("Error :(")
    }}

       const venta = async (carrito)=>{
        const tokenAuth = localStorage.getItem("token")
       
        try{
            console.log(tokenAuth)
           await fetch(localHost+"/api/checkouts",{
                method: "POST",
                headers:{"Content-Type":"application/json",
                    Authorization:'Bearer '+tokenAuth
                },
                body:JSON.stringify({cart:carrito,})
            })
            setPizza([])
            mensajeSwal("Logrado","Su pedido esta completado","success")
        }catch(error){console.log(error)}
       }




    return (

        <TokenContext.Provider value={{token,login,email,setEmail,password,setPassword,getUser,user,setUser,logout,register,venta}}>
            {children}

        </TokenContext.Provider>
    )
}
export default TokenProvider