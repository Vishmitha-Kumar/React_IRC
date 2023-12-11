import './Assets/Css/nav.css'
import './Assets/Css/style.css'
import './Assets/Css/home.css'
import Nav from './Components/Nav'
import Home from './Components/Home'

function App() {
    return (
        <div className="container">
            <Nav />
             <Home/>
        </div>
    )
}
export default App