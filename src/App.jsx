import { useState } from 'react'
import NavBar from './components/NavBar/navBar'
import Home from './components/Home/home'
import What from './components/What_Do/what_we_do'
import Services from './components/Our-Services/our-services'
import Liquid from './components/Liquid/liquid'
import Options from './components/Options/options'
import Perform from './components/Perform/perform'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <main>
        <Home />
        <What />
        <Services />
        <Liquid />
        <Options />
        <Perform />
      </main>
    </>
  )
}

export default App
