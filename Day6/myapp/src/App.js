import Navbar from './Components/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import {Route,Routes} from 'react-router-dom'
import './Assets/Css/style.css'
function App(){
  return(
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path= "/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    
    </div>
  )
}
export default App