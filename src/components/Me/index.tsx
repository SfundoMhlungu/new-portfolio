
import Zig from "/public/file-type-zig.svg"
import nextjs from "/public/next-js.svg"
import wasm from "/public/file-type-wasm.svg"
import Ionic from "/public/file-type-ionic.svg"
import HTML from "/public/html-5-logo.svg"
import AS from "/public/as.svg"


const height = "20px"



function Me(){




return(

   <div className="grid-ish">
      <div className="h-full m-4 center-for-mobi ">
         <h3 className="text-white">About Me</h3>
         <div>
            <p className="text-xl mb-4">
            Hello! My name is Sfundo Mhlungu and I love all thigs JavaScript, with main focus on the Front-end part.
            My interest in coding began back in 2018 when discoverd Python and God mode scripts nearly frying my pc,
            never looked back!
              
            </p>

            <p  className="text-xl mb-4">
            Fast forward today, my main is building robust and performant applications for all plartforms with JavaScript,
            I have an undying passion for web workers, webAssembly and TS, I extensively utilize them as much as I can if I get a chance.
            </p>
            <p  className="text-xl mb-4">
               If I am not building stuff, I am definetley chilling with my friends or blogging on dev.to about JS and stuff.
            </p>
         </div>
      </div>
      <div className="h-full flex flex-col justify-center items-center m-4 pt-4">
          <h3 className="text-center MecolorText mobi" >Front-end developer</h3>
          <div>
             <ul>
             <li className="notfloaty">
                  <img style={{height}} src="/icons8-react-100.png"/>
                   React
               </li>
                <li className="notfloaty">
                <img style={{height}} src={nextjs}/>
                   Next js
                   
                   </li>
                <li className="notfloaty">
                <img style={{height}} src={Ionic}/>
                   Ionic
                  </li>
                <li className="notfloaty">
                <img style={{height}} src="/neutralino.png"/>
                   Neutralino js
                   
                  </li>
                <li className="notfloaty">
                <img style={{height}} src={HTML}/>
                   HTML, CSS, SASS
                   </li>
             
             </ul>
          </div>
          <h3 className="text-center MecolorText mt-4 mobi">Low level programmer</h3>
          <div>
             
          <ul>
                <li className="notfloaty">
                <img style={{height}} src={wasm}/>
                   Wasm
                  </li>
                <li className="notfloaty">
                <img style={{height}} src={AS}/>
                   Assemblyscript
                   </li>
                <li className="notfloaty">
                <img style={{height}} src={Zig}/>
                   Zig
                   </li>
           
             </ul>
          </div>
      </div>
   </div>


)

}



export default Me
