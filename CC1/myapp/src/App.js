import './Assets/Css/nav.css'
import './Assets/Css/style.css'
import './Assets/Css/home.css'
import './Assets/Css/about.css'
import './Assets/Css/footer.css'
import'./Assets/Css/login.css'
import './Assets/Css/register.css'
import './Assets/Css/overlap.css'
import './Assets/Css/dashboard.css'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
// import Dashboard from './Components/Dashboard'
import {Routes, Route} from 'react-router-dom';


function App() {
    return (

        <>
        <div className="container"> 
        <Routes>
            <Route path = '/' element = {<Login/>}/>
            <Route path = '/home' element = {<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
       
            </div>
        </>
    )
}
export default App