import React , {useState, useEffect} from 'react'
 import Testimonials from "./Testimonials";

function App() {
  const [isDesktop , setisDesktop] = useState((window.innerWidth>1000))
  useEffect( ()=> {
      window.addEventListener('resize', ()=>{
          setisDesktop((window.innerWidth>1000))
      })
  },[])
  const mobileStyles = {
    width: '80%',
    margin: '5rem auto'
  }
  const desktopStyles = {
    width: '80%',
    margin: '5rem auto',
    display: 'grid',
    gridTemplateAreas: `
    'daniel daniel daniel jonathan kira' 
    'jeanette patrick patrick patrick kira'
    `,
  }
  return (
    <div className="App">
       <div 
       className='wrapper'
       style={isDesktop?desktopStyles:mobileStyles} >
         < Testimonials isDesktop={isDesktop}/>
       </div>
    </div>
  );
}

export default App;
