import React from 'react'
import User from './Pages/User'
import Adduser from './Pages/Adduser'
import Edituser from './Pages/Edituser'
import {Routes,Route} from 'react-router-dom'
function App()
{
    return(
        <>
        <Routes>
            <Route path='/' element={<User/>}/>
            <Route path='/add' element={<Adduser/>}/>
            <Route path='/edit/:id' element ={<Edituser/>}/>
        </Routes>
        </>
    )
}
export default App