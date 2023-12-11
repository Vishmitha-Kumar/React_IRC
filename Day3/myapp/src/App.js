import './Assets/Css/nav.css'
import './Assets/Css/style.css'
import './Assets/Css/home.css'
import './Assets/Css/about.css'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Ovalcard from './Components/Ovalcard'
import About from './Components/About'
import Overlap from './Components/Overlap'

function App() {
    return (
        <div className="container">
            <Nav />
             <Home/>
             <Ovalcard/>
             <About/>
             <Overlap/>
        </div>
    )
}
export default App