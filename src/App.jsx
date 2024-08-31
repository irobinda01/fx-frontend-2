import { useState } from 'react'
import NavBar from './components/NavBar/navBar'
import Home from './components/Home/home'
import What from './components/What_Do/what_we_do'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <main>
        <Home />
        <What />
      </main>
    </>
  )
}

export default App
