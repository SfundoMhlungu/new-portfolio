import { useState } from "react";
import {motion} from "framer-motion"

const transition = {duration: .8, ease: [0.6,-.05, .01, .9 ]}
export default function() {
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