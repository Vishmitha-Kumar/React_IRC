import React from 'react'
import './Assets/Style.css'
import NavBar from './components/Navbar'
import WithLoading from './components/WithLoading'
import MyComponent from './components/Mycomponent'


const WrappedComponentWithLoading = WithLoading(MyComponent)
const App = () => {


  return (
    <>
    <NavBar/>
    {/* <WrappedComponentWithLoading/> */}
    </>
  )
}

export default App