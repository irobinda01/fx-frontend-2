import { useState } from 'react'
import NavBar from './components/NavBar/navBar'
import Home from './components/Section1/home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <main>
        <Home />
      </main>
    </>
  )
}

export default App
