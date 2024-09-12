import { useState } from 'react'
import NavBar from './components/NavBar/navBar'
import Home from './components/Home/home'
import What from './components/What_Do/what_we_do'
import Services from './components/Our-Services/our-services'
import Liquid from './components/Liquid/liquid'
import Options from './components/Options/options'
import Perform from './components/Perform/perform'
import Who from './components/Who_We_Are/who_we_are'
import Strategy from './components/Strategy/strategy'
import './App.css'
import Mirror from './components/Mirror/mirror'
import Responsible from './components/Responsible/responsible'
import Management from './components/Management/management'

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
        <Who />
        <Strategy />
        <Mirror />
        <Responsible />
        <Management />
      </main>
    </>
  )
}

export default App
