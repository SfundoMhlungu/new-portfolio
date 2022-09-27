import { useState, useEffect, useRef } from 'react'
import {motion, AnimatePresence, AnimateSharedLayout} from "framer-motion"
import { FaHome, FaMale, FaBriefcase, FaCommentDots, FaBackward } from "react-icons/fa";

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
   const [open, setOpen_] = useState("Home");



   const setOpen = (arg: string) => {
        setOpen_("Loading")
        const l = setTimeout(() => {
            setOpen_(arg);
            clearTimeout(l)
        }, 1850);
   }

   const setOpenM = (arg: string) => {
    // setOpen_("Loading")
    setOpen_(arg);
    setMenOpen(false)
    // const l = setTimeout(() => {
     
    //     clearTimeout(l)
    // }, 1850);
}
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
    
        <Menu openMenu={setMenOpen} open={menuOpen} setOpen={setOpenM}/>
    
    <div className={`App relative`}>
 
 <ul>
    <li className='ul hide-for-desktop'>
                        <a className="text-black"  href="#" onClick={() => setMenOpen(true)}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </a>
                    </li>
                </ul>
        <div className='ham--menu con'>
                 
          <div className='w-full side--links flex flex-col  hide-for-mobile'>
            <div className='devImg'>
              <img src="/dev.jpg"/>
            </div>
            <div className='flex justify-evenly bg-green icons mt-4'>
              <a href="https://twitter.com/MhlunguSfundo" target="_blank">
              <img style={{height: "40px"}} src="icons8-twitter-30.png"/>

              </a>
              <a href="https://github.com/SfundoMhlungu" target="_blank">

      
              <img style={{height: "40px"}} src="icons8-github-50.png"/>
            </a>
            <a href="https://github.com/SfundoMhlungu" target="_blank">

            <img style={{height: "40px"}} src="icons8-linkedin-50.png"/>
            </a>
            </div>
            {/* <a className='text-2xl ml-12'>Sfundo Mhlungu</a> */}
            {/* <a>Frontend dev</a> */}
             {/* <NavBar openMenu={setMenOpen}/> */}
            <div className='actualLinks'>
              <div className={`flex ${open === "Home" ? "selected": ""}`}>
                <FaHome/>
              <a onClick={() => setOpen("Home")}>Home</a>
              </div>
              <div className={`flex ${open === "Me" ? "selected": ""}`}>
                <FaMale/>
             <a  onClick={() => setOpen("Me")}> Me</a>
             </div>
             <div className={`flex ${open === "Projects" ? "selected": ""}`}>
               <FaBriefcase/>
             <a  onClick={() => setOpen("Projects")}>Projects</a>
             </div>
             {/* <div className={`flex ${open === "" ? "selected": ""}`}>
               <FaCommentDots/>
             <a  onClick={() => setOpen("")}>Contact</a>
             </div> */}
            </div>
           
              
          </div> 
          <motion.div className='content ml-2'>
  
        { open === "Home" ?   <Hero openMenu={setMenOpen}/>  : open === "Projects" ? <Projects/> :
         open === "Me" ?   <Me/> : open === "Loading" ? <Panels/> :  <></>
        }
       
            {/* <Featured/> */}
            
          
           
          </motion.div>
          
        </div> 
    
    </div>
    </>
  )
}

export default App

//@ts-ignore
const Menu = ({openMenu, open, setOpen}) => {




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
             className="w-full "
          >

         
         <div className='flex w-full justify-start p-4'>  
            <button onClick={() => openMenu(false)}><FaBackward/></button>
            </div>
            <div className='actualLinks justify-center items-center'>
              <div className={`flex w ${open === "Home" ? "selected": ""}`}>
                <FaHome/>
              <a onClick={() => setOpen("Home")}>Home</a>
              </div>
              <div className={` w flex ${open === "Me" ? "selected": ""}`}>
                <FaMale/>
             <a  onClick={() => setOpen("Me")}> Me</a>
             </div>
             <div className={`flex w ${open === "Projects" ? "selected": ""}`}>
               <FaBriefcase/>
             <a  onClick={() => setOpen("Projects")}>Projects</a>
             </div>
             {/* <div className={`flex ${open === "" ? "selected": ""}`}>
               <FaCommentDots/>
             <a  onClick={() => setOpen("")}>Contact</a>
             </div> */}
            </div>
            </motion.div>
        </motion.div>
         <Panels/>
        </>)}
        </AnimatePresence>
 
  )
}

