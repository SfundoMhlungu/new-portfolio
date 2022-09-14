// simple(to the left  framer motion bar)







function NavBar(){



   return(
       <div className="NavBar flex mb-4"> 
       
       <div className="w-full bg-indigo grid-ish">
           <div>
               <h3>Personal.</h3>
           </div>

           <div >
                <ul className="flex justify-between">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Featured</a>
                    </li>
                    <li>
                        <a href="#">Me</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Contacts</a>
                    </li>
                </ul>
           </div>

       
     </div>

       </div>

   
   
   )

}


export default NavBar





