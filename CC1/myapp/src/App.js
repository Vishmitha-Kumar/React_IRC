import {Routes, Route} from 'react-router-dom';
import './Assets/Css1/home.css'
import './Assets/Css1/form.css'
import './Assets/Css/login.css'
import './Assets/Css/register.css'
import './Assets/Css1/dash.css'
import './Assets/Css1/dpet.css'
import './Assets/Css1/cpet.css'
import Home from './Pages/Home'
import Form from './Pages/Form'
import Login from './Components/Login'
import Register from './Components/Register'
import Dash from './Pages/Dash'
import Dpet from './Pages/Dpet'
import Cpet from './Pages/Cpet'

function App(){
    return(
        <>
        
        <Routes>
            <Route path = '/' element = {<Home/>}/>
            <Route path = '/form' element = {<Form/>}/>
            <Route path='/login' element={<Login/>}  />
            <Route path='/register' element={<Register/>}/>
           <Route path="/dpet" element ={<Dpet/>}/>
           <Route path="/cpet" element ={<Cpet/>}/>
        </Routes>
        </>

    )
}
export default App




























// import './Assets/Css/nav.css'
// import './Assets/Css/style.css'
// import './Assets/Css/home.css'
// import './Assets/Css/about.css'
// import './Assets/Css/footer.css'
// import'./Assets/Css/login.css'
// import './Assets/Css/register.css'
// import './Assets/Css/overlap.css'
// import './Assets/Css/dashboard.css'
// import Home from './Components/Home'
// import Login from './Components/Login'
// import Register from './Components/Register'
// import {Routes, Route} from 'react-router-dom';
// import Overlap from './Components/Overlap'
// import "./Assets/Css/overlap.css"
// import DWelcome from './Components/DWelcome'
// import Accessories from './Pages/Accessories'

// function App() {
//     return (

//         <>

//         <div className="container"> 
    
       
//         <Routes>
//             <Route path = '/' element = {<Login/>}/>
//             <Route path = '/home' element = {<Home/>}/>
//             <Route path='/register' element={<Register/>}/>
//             <Route path='/login' element={<Login/>}/>
//             <Route path='/d' element={<DWelcome/>}/>
//         </Routes>
       
//             </div>
//         </>
//     )
// }
// export default App