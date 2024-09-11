import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import Portfolio from './pages/Portfolio'
import Viagem from './pages/Viagem'

function App() {
  const [pagina, setPagina] = useState(<Home/>)

  return (
    <>

    <nav>
    <button onClick={() => setPagina (<Home/>)}>HOme</button>
    <button onClick={() => setPagina (<Portfolio/>)}>Portfolio</button>
    <button onClick={() => setPagina (<Viagem/>)}>Portfolio</button>


    </nav>
    { pagina }
    </>
  )
}

export default App
