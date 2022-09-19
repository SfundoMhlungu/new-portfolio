import { useState, useEffect, useRef } from 'react'
import {motion, AnimatePresence} from "framer-motion"


// componets
import NavBar from "./components/NavBar/"
import Hero from "./components/Hero/"
import Featured from "./components/Featured/"
import Projects from "./components/Projects/"
import Me from "./components/Me/"
import Foooter from "./components/Footer/"


 
import reactLogo from './assets/react.svg'
import './App.css'

// fairly dirty
const root = document.getElementById('root')

const transition = {duration: .8, ease: [0.6,-.05, .01, .9 ]}
function App() {
   const [menuOpen, setMenOpen]= useState(false);
   useEffect(()=> {
          // TODO figure out how to hide vertical scrollbar
          if(menuOpen){
            //  console.log(root)
            document.body.classList.add("noScroll")
           }else{
            document.body.classList.remove("noScroll")
           }
        
    
   }, [menuOpen])
  return (
    <>
  
        <Menu openMenu={setMenOpen} open={menuOpen}/>
    
    <div className={`App`}>
       
    
         <NavBar openMenu={setMenOpen}/>
         <Hero/> 
         {/* <Featured/> */}
         <Projects/>
         <Me/>
         <Foooter/>
    </div>
    </>
  )
}

export default App


const Menu = ({openMenu, open}) => {




  return (
      <AnimatePresence>
        {open && (
          <>
        <motion.div 
          initial={{visibility: "hidden"}}
          animate= {{visibility: "visible"}}
          exit={{visibility: "hidden"}}
          transition={{...transition, delay: 1}}
        className="menu">
          <motion.div 
             initial={{opacity: 0}}
             animate= {{opacity: 1}}
             transition={{...transition, duration: 8}}
          >
            <h1>MENU</h1>
            <button onClick={() => openMenu(false)}>Close</button>
            </motion.div>
        </motion.div>
         <Panels/>
        </>)}
        </AnimatePresence>
 
  )
}


const Panels = () => {
    const [panelAnimeComplete, setAnimeComplete] = useState(false);


  return (

    <>
    <motion.div
      style={{background: panelAnimeComplete ?  "#e5e5e5" : "#e7e7de"}}
       initial={{height: 0}}
       animate={{height: [0, window.innerHeight, 0], bottom: [0, 0, 0]}}
       exit={{height: [0, window.innerHeight, 0], top: [null, 0, 0]}}
       transition= {{...transition, duration: 2, times: [0, 0.5, 1]}}
    className="left-panel-background border-sm"></motion.div>
    <motion.div 
    // "#e7e7de" : "#e7dee7"
    style={{background: panelAnimeComplete ? "#e5e5e5" : "#e7e7de"}}
    initial={{height: 0}}
    animate={{height: [0, window.innerHeight, 0], bottom: [0, 0, window.innerHeight]}}
    exit={{height: [0, window.innerHeight, 0], bottom: [null, 0, 0]}}
    transition= {{...transition, duration: 2, times: [0, 0.5, 1]}}
    onAnimationComplete= {() => setAnimeComplete(!panelAnimeComplete)}
    className="right-panel-background border-sm"></motion.div>

    </>
  )
}