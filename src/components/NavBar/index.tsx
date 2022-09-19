// simple(to the left  framer motion bar)







function NavBar({openMenu}){



   return(
       <>
         
       <div className="NavBar flex"> 
         {/* <div className="hero-img">
           <img src="/patterns/PNG/1.png" />
         </div> */}
       <div className="w-full bg-indigo grid-ish">
           <div>
               <h3>Personal.</h3>
           </div>

           <div >
                <ul className="flex justify-end">
                    {/* <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Featured</a>
                    </li>
                    <li>
                        <a href="#">Me</a>
                    </li> */}
                   
                    {/* <li className="lets-talk">
                        <a href="#">Let's talk</a>
                    </li> */}
                    <li>
                        <a  className="text-black"  href="#" onClick={() => openMenu(true)}>HamBTN</a>
                    </li>
                </ul>
           </div>
        

       
     </div>
  
       </div>

       </>

   
   
   )

}


export default NavBar








