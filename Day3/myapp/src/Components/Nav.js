import logo from '../Assets/Images/logo.png'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <>
        <div className="navbar">
                    <h1>The PetNest</h1>
                    <img className="logo" src = {logo}/>
            <ul>
                <li>
                    <Link to = '/home'>
                        Home
                    </Link>
                    <a href ="#">Adopt me</a>
                    <a href ="#">Pet Shop</a>
                    <Link to = '/register'>
                   Register
                   </Link>
                </li>
            </ul>
        </div>
        </>
    )
}
export default Nav