
import React from 'react'
import Navbar from './Pages/E4/Navbar'
import Home from './Pages/E4/Home'
import About from './Pages/E4/About'
import {Route,Routes} from 'react-router-dom'

function App(){
  return(
    <div className='App'>
      <Navbar/>
           <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            </Routes>  
    </div>
  )
}
export default App














// import React from "react";
// import DisplayData from "./Pages/E3/DisplayData";
// function App(){
//   const staticData="Hello,I am static data";
//   const dynamicData=new Date().toLocaleString();
//   return(
//     <>
//     <h1>Props Demo</h1>
//     <DisplayData staticData={staticData} dynamicData={dynamicData}/>

//     </>
//   )
// }
// export default App;








// import React from "react";
// import Hello from "./Pages/E2/Hello";

// function App(){
//   return(
//     <>
//     <Hello/>
//     </>
//   )
// }
// export default App














// import Hero from './Pages/E7/Hero'
// import ErrorBoundary from './Pages/E7/ErrorBoundary'




// function App() {
//   return (
//     <div className="App">
//       <ErrorBoundary>
//         <Hero heroName="Batman" />
//       </ErrorBoundary>

//       <ErrorBoundary>
//         <Hero heroName="Joker" />
//       </ErrorBoundary>
//     </div>
//   );
// }

// export default App;















// import InlineStyling from "./Pages/E6/InlineStyling";
// function App(){
//   return(
//     <>
//     <InlineStyling/>
//     </>
//   )
// }
// export default InlineStyling