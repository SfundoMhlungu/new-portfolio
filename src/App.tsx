import { useState, useEffect, useRef } from 'react'



// componets
import NavBar from "./components/NavBar/"
import Hero from "./components/Hero/"
import Featured from "./components/Featured/"
import Projects from "./components/Projects/"
import Me from "./components/Me/"
import Foooter from "./components/Footer/"

 
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const f = useRef(null)
  useEffect(()=>{

    //  console.log("I am in tsx emacs beach", count)
     

  }, [])
  return (
    <div className="App">
    
         <NavBar/>
         <Hero/> 
         <Featured/>
         <Projects/>
         <Me/>
         <Foooter/>
    </div>
  )
}

export default App
