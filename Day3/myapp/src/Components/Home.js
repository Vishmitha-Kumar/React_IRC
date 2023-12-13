import dog from '../Assets/Images/dog.jpg'
import {Link} from 'react-router-dom'
import Nav from'./Nav'
import Ovalcard from './Ovalcard'
import About from './About'
import Overlap from './Overlap'
import Footer from './Footer'
// import Register from './Components/Register'

const Home=()=>
{
    return(
        
        <div>
            <Nav/>
            <img className="adopt" src = {dog}/>
            <div className="quote-container">
            <p>Adopt a forever friend today!</p>
               

            <h2>Browse pets from our network of over 11,500 shelters and rescues.</h2>
            </div>
             {/* <Home/> */}
         <Ovalcard/>
         <About/>
         <Overlap/>
        <Footer/>  
           
        </div>
        
    )
}
export default Home