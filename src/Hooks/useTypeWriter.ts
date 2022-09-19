



const phrases = ["I'm Sfundo.", "I love React.", "I love Ionic.", "I love Zig.", "I like C."]


interface TypeW {
    el : HTMLElement
}


export function useTypeWriter() : (args: TypeW) => void{
    //    useEffect(() => {

    //     console.log(args)
    //     args.el.innerHTML = "Hello, World";

    //    }, [])
   
    function writer(args: TypeW){
        
            //  args.el.innerHTML = "I love C";
       const textDisplay = args.el
        let i = 0;
        let j = 0;   // current phrase index
        let currentPhrase:Array<string> = []
        let isDeleting = false
        let isEnd = false;
        let lastLoop = false;
        
        
         

        function loop(){    
            isEnd = false
         textDisplay.innerHTML = currentPhrase.join('')
     
  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
        let nextWord
     if(phrases[i + 1]=== undefined){
        nextWord = phrases[0]
     }else{
         nextWord = phrases[i+1]
     }
    //  console.log("next word", nextWord)
      let combined = currentPhrase.join("");
      // console.log(nextWord.slice(0, currentPhrase.length), "slice")
      if(nextWord.slice(0, currentPhrase.length) === combined){
            //  console.log("equal", currentPhrase.join(""), combined)
            
            isDeleting = false
            i++
            if (i === phrases.length) {
              console.log("end phrase")
              i = 0;
              lastLoop = true;
           
      
            }
            
      }else{
        currentPhrase.pop()
        j--
      }
     
    //   if(currentPhrase.join().startsWith(){
    //       console.log()
    //   }
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        console.log("end phrase")
        i = 0;
        lastLoop = true;
     

      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  
  const l = setTimeout(() => {
    if(lastLoop && isEnd){
        console.log("STOP HERE")
        clearInterval(l);
        return
    };
    loop()
  
    clearTimeout(l)}, time)

       }

       const s = setTimeout(() => {
        loop();
        clearTimeout(s)
       }, 1000);
      
    }

    return  writer

}