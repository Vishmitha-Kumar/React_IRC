import './Assets/Css/nav.css'
import './Assets/Css/style.css'
import './Assets/Css/home.css'
import './Assets/Css/about.css'
import './Assets/Css/footer.css'
import'./Assets/Css/login.css'
import './Assets/Css/register.css'
import './Assets/Css/overlap.css'

import Home from './Components/Home'
// import Ovalcard from './Components/Ovalcard'
// import About from './Components/About'
// import Overlap from './Components/Overlap'
// import Footer from './Components/Footer'
import Login from './Components/Login'
import Register from './Components/Register'

import {Routes, Route} from 'react-router-dom';


function App() {
    return (

        <>
        <div className="container"> 
        <Routes>
            <Route path = '/' element = {<Login/>}/>
            <Route path = '/home' element = {<Home/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
       
            </div>
        </>
    )
}
export default App