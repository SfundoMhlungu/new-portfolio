
import Zig from "/file-type-zig.svg"
import nextjs from "/next-js.svg"
import wasm from "/file-type-wasm.svg"
import Ionic from "/file-type-ionic.svg"
import HTML from "/html-5-logo.svg"
import AS from "/as.svg"


const height = "20px"



function Me(){




return(

   <div className="grid-ish">
      <div className="h-full m-4 center-for-mobi ">
         <h3 className="text-white">About Me</h3>
         <div>
            <p className="text-xl mb-4">
            Hello! My name is Sfundo Mhlungu and I love all things JavaScript, with the main focus on the Front-end part.
            My interest in coding began back in 2018 when I discovered Python and god mode scripts, nearly frying my PC and
            never looked back!
              
            </p>

            <p  className="text-xl mb-4">
            Fast forward to today, my main focus is building robust and performant applications for all platforms with JavaScript,
            I have an undying passion for web workers, webAssembly and Typescript, I extensively utilize them any chance I get.
            </p>
            <p  className="text-xl mb-4">
               If I am not building stuff, I am definitely  chilling with my friends or blogging on dev.to about JS and stuff.
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
