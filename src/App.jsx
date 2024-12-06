import './App.css'

import Navigation from './routes/navigation'
import CartProvider from './contexts/cartContext'
import FuncionesProvider from './contexts/funcionesCartContext'
import TokenProvider from './contexts/tokenContext'
function App() {

  return (
    <>
    <CartProvider>
    <FuncionesProvider>
      <TokenProvider>
    <Navigation/>
    </TokenProvider>
    </FuncionesProvider>

    </CartProvider>
    

  
      </>
    
  )
}

export default App
