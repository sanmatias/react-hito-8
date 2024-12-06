import { createContext,useState } from "react";

export const TokenContext = createContext()

const TokenProvider = ({children}) => {
    const [token ,setToken ] =useState(true)

    const terminoSesion = ()=>{
        setToken(false)
    }
    const iniciarSesion = ()=>{
        console.log(token)
        setToken(true)
    }


    return (

        <TokenContext.Provider value={{terminoSesion,iniciarSesion,token}}>
            {children}

        </TokenContext.Provider>
    )
}
export default TokenProvider