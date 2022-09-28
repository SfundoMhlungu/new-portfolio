import { useEffect, useState } from "react"

import {motion, AnimateSharedLayout, AnimatePresence} from "framer-motion"

interface link {
     icon: string,
     link: string
}



interface project {
     name: string,
     avatar: string, 
     tools: Array<string | Record<any, any>>,
     type: Record<string, any>,
     description:string,
     links?: Record<any, link>
}





const p: Array<project>  = [
             {
              name: "bokke", 
              avatar: "/projects/Bokkegui/7.png",
              tools: [" JavaScript ", " CSS ", " HTML ", {name: " Atomicus "},{name: " Bokke.js "}],
              description: "Desktop Dataframe Software",
              type: {"Projects": "", "All": ""},

             },
             {
               name: "Pam", 
               avatar: "/projects/Pam/3.png",
               tools: [" React ", " Next Js ", " Ionic ", " Tailwind ", " PullState "],
               description: "Allergic reaction tracker & predictor", 
               type: {"Projects": "", "All": ""},
 
              },
              {
               name: "t24", 
               avatar: "/projects/t24/1.png",
               tools: [" JavaScript "  , " CSS " , " HTML ", " Supabase ", " netlify serveless " ],
               description: "Website for an ebook",
               type: {"Projects": "", "All": ""},
 
              },
              {
               name: "AlgoViz", 
               avatar: "/projects/AlgoViz/1.png",
               tools: [ " JavaScript ", " CSS ", " HTML ", {name: " Atomicus "}, " HTML canvas  "],
               description: "Algorithm Visualizer Front-end",
               type: {"Projects": "", "All": ""},
 
              },
          //     {
          //      name: "Texte", 
          //      avatar: "",
          //      tools: [" JavaScript ", " CSS ", " HTML ", {name: " Atomicus "}, " ML5 "],
          //      description: "Natural Language Processing Frontend",
          //      type: {"Projects": "", "All": ""},
 
          //     },
              {
               name: "Atomicus", 
               avatar: "/projects/atomicus/1.png",
               tools: [" Typescript " ],
               description: "Utility functions for creating stateful HTML elements",
               type: {"DevTools": "", "All": ""},
 
              },
              {
               name: "Bokke.js", 
               avatar: "/projects/bokke/1.png",
               tools: [" Typescript ", " Web workers ", " Chart.js "],
               description: "Dataframe package",
               type: {"DevTools": "", "All": ""},
 
              },
              {

               name: "Vanilla Forms", 
               avatar: "/projects/vanilla/1.png",
               tools: [" Typescript "],
               description: "Tool for creating reactive forms in JS",
               type: {"DevTools": "", "All": ""},
 
              },
          //     {

          //      name: "vec", 
          //      avatar: "",
          //      tools: [" Zig ", " wasm " , " JavaScript "],
          //      description: "",
          //      type: {"DevTools": "", "All": ""},
 
          //     }
            



]

const filters = [
     {title: "All", color: "#BE123C"}, 
     {title: "Projects", color: "#BE123C"}, 
     {title: "DevTools", color: "#BE123C"}, 
     // {title: "Articles", color: "#BE123C"}, 
]


function Projects(){


     const [projects, setProjects] = useState(p);
     const [selected, setSelected] = useState(0);
     const [filtering, setFiltering] = useState(false);

     const filterP = (filter: string)=> {
          // setFiltering(true)
          setProjects(prev => {
               return p.filter((p) => p.type[filter] !== undefined)
          })
     //    const m = setTimeout(() => {
     //           setFiltering(false);
     //           clearTimeout(m)
     //      }, 100);

     }


     // useEffect(()=> {
     //   filterP("Projects")
     // }, [filterP])

return (


<div className="content"> 



          <AnimateSharedLayout>
          {/* the header(framered list) */}
          <motion.ol className="hide-for-mobile">
               {filters.map(({title, color}, i)=> (
                    <motion.h3
                    key={i}
                    onClick={() => {filterP(title), setSelected(i)}} 
                    className= {`title ${i === selected && "selected"}`}
                    style={{color: i === selected ? color: "#f2f3ff"}}
                    layout
                      
                    >
                              {i === selected && (
                                   <motion.div
                                   className="underline"
                                   layoutId="underline"
                                   style = {{background: color}}
                                   >

                                   </motion.div>
                              )}

                         {title}
                    </motion.h3>
               ))}
         </motion.ol>
          </AnimateSharedLayout>
 
          <div  className="w-full m-4 h-auto pt" >
             
               <motion.div className="w-full">

            
               <AnimatePresence>
          {/* filtered projects */}
          {projects.map((p, i)=> (
                        <>
                       { i % 2 == 0 ?  <Project p={p} even={true} index={i}/> : <Project p={p} even={false} index={i}/>}
                       </> 
                  
              
          ))}
              </AnimatePresence>
             </motion.div>
            
     </div>


</div>

)


}


export default Projects


const transition = {duration: .8, ease: [0.6,-.05, .01, .9 ]}
//@ts-ignore
function Project({p, even, index}){
     return (
          <motion.div
          layout
       
          key={index}
          initial={{opacity: 0}}
          animate= {{opacity: 1}}
          exit= {{ opacity: 0}}
          transition={{...transition, duration: .8}}
        
          className={`grid-ishp mt-12  ${even ? 'flow-reverse': "flow-normal "}`} style={{height: "100vh"}}>
               <div>
                  <div className="flex justify-center">
                       <h1>{p.name}</h1>
                  </div>
                  <div className="details relative mt-4">
                       <div className="details-card text-center shade">
                         <p>{p.description}</p> 
                       </div>

                         
                  </div>
                  <div className="flex justify-center hide-for-mobile">
               
                       {p.tools.map((tool: any)=> {
                            return <div className="m-2">
                                 {typeof tool === "object" ? 
                                  <p>{tool.name}</p>:
                                  <p>{tool}</p>   
                              }
                            </div>
                         //    typeof tool === "object"? 
                         //     (<p>{tool.name}</p>):
                         //    (<p>{tool}</p>)
                       })}

                  </div>
               </div>
              <div className="w-full h-96 flex justify-center img-p">
                  <motion.img animate src={p.avatar}/>
              </div>
              
          </motion.div>
     )
}