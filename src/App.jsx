import './App.css'

import Navigation from './routes/navigation'
import CartProvider from './contexts/cartContext'
import FuncionesProvider from './contexts/funcionesCartContext'
function App() {

  return (
    <>
    <CartProvider>
    <FuncionesProvider>
    <Navigation/>
    </FuncionesProvider>

    </CartProvider>
    

  
      </>
    
  )
}

export default App
