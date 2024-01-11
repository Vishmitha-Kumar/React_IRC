import React from 'react'
import ErrorBoundary from './ErrorB/ErrorBoundary';
import Hero from './ErrorB/Hero';
function App() {
 return(
   <div>
       <ErrorBoundary>
        <Hero heroName='Batman'/>
       </ErrorBoundary>
       <ErrorBoundary>
        <Hero heroName='Joker'/>
       </ErrorBoundary>
   </div>
 )
 
}

export default App;