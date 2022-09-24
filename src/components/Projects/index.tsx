import { useState } from "react"

import {motion, AnimateSharedLayout} from "framer-motion"

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
              name: "bokke GUI", 
              avatar: "/projects/Bokkegui/7.png",
              tools: ["JavaScript", "CSS", "HTML", {name: "Atomicus"},{name: "Bokke.js"}],
              description: "Desktop Dataframe Software",
              type: {"Projects": "", "All": ""},

             },
             {
               name: "Pam", 
               avatar: "/projects/Pam/3.png",
               tools: ["React", "Next Js", "Ionic", "Tailwind", "PullState"],
               description: "Allergic reaction tracker/predictor", 
               type: {"Projects": "", "All": ""},
 
              },
              {
               name: "t24", 
               avatar: "/projects/t24/1.png",
               tools: ["JavaScript", "CSS", "HTML", "Supabase DB", "netlify serveless FN's" ],
               description: "Website for an ebook",
               type: {"Projects": "", "All": ""},
 
              },
              {
               name: "AlgoViz", 
               avatar: "",
               tools: ["JavaScript", "CSS", "HTML", {name: "Atomicus"}, "Canvas"],
               description: "Algorithms Viz Frontend",
               type: {"Projects": "", "All": ""},
 
              },
              {
               name: "Texte", 
               avatar: "",
               tools: ["JavaScript", "CSS", "HTML", {name: "Atomicus"}, "ML5"],
               description: "Natural Language Processing Frontend",
               type: {"Projects": "", "All": ""},
 
              },
              {
               name: "Atomicus", 
               avatar: "/projects/atomicus/1.png",
               tools: ["Typescript"],
               description: "Utility functions for creating stateful HTML elements",
               type: {"DevTools": "", "All": ""},
 
              },
              {
               name: "Bokke.js", 
               avatar: "/projects/bokke/1.png",
               tools: ["Typescript", "Web workers", "Chart.js"],
               description: "Dataframe package",
               type: {"DevTools": "", "All": ""},
 
              },
              {

               name: "Vanilla Forms", 
               avatar: "/projects/vanilla/1.png",
               tools: ["Typescript"],
               description: "Tool for creating reactive forms in JS",
               type: {"DevTools": "", "All": ""},
 
              },
              {

               name: "vec", 
               avatar: "",
               tools: ["Zig", "wasm", "JavaScript"],
               description: "",
               type: {"DevTools": "", "All": ""},
 
              }
            



]

const filters = [
     {title: "All", color: "#BE123C"}, 
     {title: "Projects", color: "#BE123C"}, 
     {title: "DevTools", color: "#BE123C"}, 
     {title: "Articles", color: "#BE123C"}, 
]


function Projects(){


     const [projects, setProjects] = useState(p);
     const [selected, setSelected] = useState(0);

     const filterP = (filter: string)=> {
          setProjects(prev => {
               return p.filter((p) => p.type[filter] !== undefined)
          })
     }

return (


<div className="content"> 

     <p>My Work</p>
   
          <AnimateSharedLayout transition={{duration: .2}}>
          {/* the header(framered list) */}
          <motion.ol>
               {filters.map(({title, color}, i)=> (
                    <motion.h3
                    key={i}
                    onClick={() => {filterP(title), setSelected(i)}} 
                    className= {`title ${i === selected && "selected"}`}
                    style={{color: i === selected ? color: "#333"}}
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
 
          <motion.div animate className="grid-ish">
          {/* filtered projects */}
          {projects.map((p, i)=> (
               <div>
                    <Project p={p}/>
               </div>
          ))}
     </motion.div>


</div>

)


}


export default Projects





/*
type of projects I have:
   
all :
   bokke  
   atomicus
   vanilla forms
   petal
   pam  - feat
   bokke GUI  - featu
   t24
   port
   algoViz
   vec
   texte - featu



   Projects
    bokke GUI  - featu
    pam  - feat
    t24
    port
    algoViz
    texte - featu
   
   DevTools
   
     atomicus
     vanilla forms
     petal
     vec
  
   Articles
     dev.to api 

   






*/

interface ForP {
     p: project
}



function Project({p}){


   return (
        <motion.div className="shadow-lg h-96 w-96 m-4 relative rounded-md">
             <div className="hero-img">
                <img src={p.avatar} /> 
             </div>
              <Details details={p}/>
         </motion.div>



   )

}

function Details({details}){


     return (
          <div className="w-full h-full flex details flex-col">
                  <div className="w-full flex">
                     <h2>{details.name}</h2>
                     <div className="ml-4">
                          <button className="buttons">View</button>
                     </div>
                  </div>
           
                  <p>{details.description}</p>
                  {/* <div  className="grid-ish">
                       {details.tools.map((tool)=> (
                            <Tool tool={tool}/>
                       ))}
                  </div> */}
            {/* {  Object.keys(details).map((key, i) => (
                   <div>
                        {JSON.stringify(details)}
                     <h2>{details[key].name}</h2>
                     <h3>{details[key].description}</h3>
                   </div>
              )) } */}
          </div>
     )
}


function Tool({tool}){


     return (
          <div>
              {typeof tool === "object" ?  
                 <div>
                      <div className="w-fit p-2 shadow-md rounded-md bg-slate">
                         <label>{tool.name}</label>
                      </div>
                 </div> :
                  <div className="w-fit p-2 shadow-md rounded-md bg-slate">
                      <label>{tool}</label>
                 </div>    
          }
          </div>
     )
}