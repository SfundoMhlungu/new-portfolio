import { useState, useEffect, useRef } from 'react'
import {motion, AnimatePresence, AnimateSharedLayout} from "framer-motion"
import { FaHome, FaMale, FaBriefcase, FaCommentDots } from "react-icons/fa";

// componets
import NavBar from "./components/NavBar/"
import Hero from "./components/Hero/"
import Featured from "./components/Featured/"
import Projects from "./components/Projects/"
import Me from "./components/Me/"
import Foooter from "./components/Footer/"
import  Panels  from './components/Panels'

 
import reactLogo from './assets/react.svg'
import './App.css'

// fairly dirty
const root = document.getElementById('root')
const transition = {duration: .8, ease: [0.6,-.05, .01, .9 ]}


function App() {
   const [menuOpen, setMenOpen]= useState(false);
   const [open, setOpen] = useState("Home");
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
    
    <div className={`App relative`}>
 
 <ul>
    <li className='ul hidden'>
                        <a className="text-black"  href="#" onClick={() => setMenOpen(true)}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </a>
                    </li>
                </ul>
        <div className='ham--menu con'>
                 
          <div className='w-full side--links flex flex-col'>
            <div className='devImg'>
              <img src="/dev.jpg"/>
            </div>
            {/* <a className='text-2xl ml-12'>Sfundo Mhlungu</a> */}
            {/* <a>Frontend dev</a> */}
             {/* <NavBar openMenu={setMenOpen}/> */}
            <div className='actualLinks'>
              <div className='flex selected'>
                <FaHome/>
              <a onClick={() => setOpen("Home")}>Home</a>
              </div>
              <div className='flex'>
                <FaMale/>
             <a  onClick={() => setOpen("Me")}> Me</a>
             </div>
             <div className='flex'>
               <FaBriefcase/>
             <a  onClick={() => setOpen("Projects")}>Projects</a>
             </div>
             <div className='flex'>
               <FaCommentDots/>
             <a  onClick={() => setOpen("")}>Contacts</a>
             </div>
            </div>
           
              
          </div> 
          <motion.div className='content ml-2'>
  
        { open === "Home" ?   <Hero openMenu={setMenOpen}/>  : open === "Projects" ? <Projects/> :
         open === "Me" ?   <Me/> :  <Foooter/>
        }
       
            {/* <Featured/> */}
            
          
           
          </motion.div>
          
        </div> 
    
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

