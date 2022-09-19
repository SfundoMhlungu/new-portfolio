import {useEffect} from "react";
import {useTypeWriter} from "../../Hooks/useTypeWriter";
import {motion} from "framer-motion"


function Hero(){
  const writer = useTypeWriter();
  console.log("rerender")
useEffect(()=> {
  const el:HTMLElement | null = document.getElementById("target");
  if(el !== null){
     writer({el});
  }





}, [])  





return (

  <div className='hero grid-ish'> 
    <div className="overlay-op">

    </div>
    <div className="hero-img">
         {/* <img src="/patterns/PNG/17.png" /> */}
         {/* 
          1 - op 5 - 7 looks good
          3 - nice 6 - 9   - looks childish
          4 - perfect - looks grown
          6 - got potential
          7 - got potential
          8 - perfect minimal, contrast well, perfect on small screen
          9 - GP
          11 - second to 8
          15 - al of 4 w/ more color
          17 - absolute perfection 
          18 - like it but too busy no amazing
          19 - look at it rested

         Vorderrhein 90
         Waihou 100
         Waiau  97
         Waimakariri 100
          */}
      </div>
    <div className="flex flex-col justify-center" style={{marginLeft: "2em", marginBottom: "20vh"}}>
       <motion.div animate className="hi">
           <motion.h1 animate>Hi👋🏽,</motion.h1>
           <h2  id="target" className="typing"></h2>
        </motion.div>
      {/* frontend dev */}
        {/* <h2>Frontend Dev.</h2> */}
        <div>
          <p>
            I am passionate about building high perfomant, scalable Frontend app's for all plartforms with javascript.
          </p>
          <div className="text-col">
          <a className="learn-more">
           Featured 🖱
          </a>
          </div>
       
        </div>
    </div>

    <div  className="flex flex-col text-center mt-6">
      {/* hero image */}
    
      

       
         <div className="align-end">
         
          <img src="/patterns/PNG/8.png"/>
          {/* <img src="/hand.png"/> */}
          {/* <img src="/hand2x.png"/> */}
         </div>
       
    </div>
{/* mo goes here */}

  </div> 


)


}

export default Hero





