function Hero(){




return (

  <div className='hero grid-ish'> 
    <div className="overlay-op">

    </div>
    <div className="hero-img">
         <img src="/patterns/PNG/17.png" />
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
    <div className="flex flex-col justify-center" style={{marginLeft: "2em"}}>
      {/* frontend dev */}
        <h2>Frontend Dev.</h2>
        <div>
          <p>
            I am passionate about building high perfomant, scalable Frontend app's for all plartforms with javascript.
          </p>

        </div>
    </div>

    <div  className="flex flex-col text-center mt-6">
      {/* hero image */}
    
         <h1>Hi👋🏽,</h1>
         <h2>I'm Sfundo</h2>
    </div>

    <div className="flex flex-col justify-center" style={{marginRight: "2em"}}>
      {/* low level p */}
      <h2>Low level Coder.</h2>
      <p>I love implementing lower level concepts in JS and creating efficient wasm modules in zig.</p>
    </div>
  
  </div> 


)


}

export default Hero





