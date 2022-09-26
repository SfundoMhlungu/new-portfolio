import {useEffect} from "react";
import {useTypeWriter} from "../../Hooks/useTypeWriter";
import {AnimatePresence, motion} from "framer-motion"



const container = {
  show: {
    transition: {
       staggerChildren: .46,
    }
  }
}

const item = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.6, .01, -.05, .95],
      duration: 1.6,
    }
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    }
  }
}

const item2 = {
  hidden: {
    opacity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.6, .01, -.05, .95],
      duration: .9,
    }
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    }
  }
}


//@ts-ignore
function Hero({openMenu}){
  const writer = useTypeWriter();
  console.log("rerender")
useEffect(()=> {
  const el:HTMLElement | null = document.getElementById("target");
  if(el !== null){
     writer({el});
  }





}, [])  





return (
<AnimatePresence>
  <div className='hero grid-ish'> 
    <div className="overlay-op">

    </div>
    <div className="ib hero-img">
     {/* <img src="/patterns/PNG/17.png"  /> */}
     </div>
    <div className="hero-img op">
     
     

   
    <div className="custom-shape-divider-top-1663766949">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" className="shape-fill" fill="#242A45"></path>
    </svg>
   
</div>

         
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
      {/* <NavBar openMenu={openMenu}/> */}
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    className="flex flex-col justify-center relative" style={{marginLeft: "2em", marginBottom: "20vh"}}>
   
       <motion.div 
            variants={item2}
       className="hi">
           <motion.h1
            variants={item2}
            >Hi👋🏽,</motion.h1>
           <motion.h2  variants={item2}  id="target" className="typing"></motion.h2>
        </motion.div>
      {/* frontend dev */}
        {/* <h2>Frontend Dev.</h2> */}
        <motion.div
          variants={item2}
        >
          <p className="p">
          a Front-end developer. Building robust, scalable and performant apps in JavaScript for all platforms.
          </p>
          <div className="text-col">
          <motion.a target="_blank" href="mailto:mhlungusk@gmail.com" variants={item2} className="learn-more">
          Let's Talk
          </motion.a>
          </div>
       
        </motion.div>
    </motion.div>

    <motion.div variants={container} 
     initial="hidden"
     animate="show"
     exit="exit"
    className="flex flex-col text-center mt-16 relative">
      {/* hero image */}
      <div className="hero-img">
    
      </div>
      <motion.div  variants={item} className="floaty flex bottom-left mb-8">
      
      <img style={{height: "30px"}} src="/icons8-programmer-64.png"/>
         Low level Programmer

      </motion.div>
      <motion.div  variants={item} className="floaty flex bottom-left mb-32">
   
      <img style={{height: "30px"}} src="icons8-typescript-48.png"/>
      Typescript

      </motion.div>
      <motion.div variants={item} className="floaty flex top-left mr-2 mt-6">
      <img style={{height: "30px", opacity: .8}} src="icons8-javascript-48.png"/>
       JavaScript
     
        

      </motion.div>
      <motion.div  variants={item} className="floaty flex top-right mt-12">
     
      
      <img style={{height: "30px"}} src="/icons8-coding-65.png"/>
      Frontend Dev

      </motion.div>
      <motion.div  variants={item} className="floaty flex justify-center bottom-right mb-6">
        <img style={{height: "30px"}} src="/icons8-react-100.png"/>
        React

      </motion.div>
   
     <motion.div className="grid-ish"
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{duration: 1.6}}
     >
       {/* <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.6}}
       className="w-96 h-80 shade mt-32 ml-2 relative">
           */}
            <img src="/carbon.png" className="w-full mt-32 h-80"/>
            {/* 
           <pre> <code className="language-javascript">
                 <pre className="keyword3">;; Hi.wat to Hi.wasm</pre>
                <pre className="keyword1"><pre className="par">(</pre>module </pre>
                <pre className="keyword1"> <pre className="par">(</pre>import <pre className="string">"console" "log" </pre></pre>
                <pre>  <pre className="par">(</pre> <pre className="keyword1">func</pre> <pre className="keyword2">$log</pre> </pre>
                <pre>    <pre className="par">(</pre> <pre className="keyword1">param</pre> <pre className="keyword2">i32 i32</pre><pre className="par">)</pre> <pre className="par">)</pre> <pre className="par">)</pre>  </pre>

                <pre>(import "js" "mem" </pre>
                <pre>(memory 1))</pre>

                <pre> (data (i32.const 0) "Hi")  </pre>
                <pre> (func (export "WriteHi")</pre>
                <pre> i32.const 0</pre>
                <pre> i32.const 2</pre>
                <pre> call $log)</pre>
                <pre>)</pre>
              </code></pre> */}
          
            
           
       {/* </motion.div> */}

     </motion.div>

{/* 
       
         <div className="align-end">
         
          <img src="/7.png"/>
          <Sp/>
          <img src="/hand.png"/>
          <img src="/hand2x.png"/>
         </div> */}
       
    </motion.div>
{/* mo goes here */}
  
  </div> 

</AnimatePresence>

)


}

export default Hero







