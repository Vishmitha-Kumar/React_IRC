import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <div className='navbar-container'>
            <ul className='nav-links'>
                <li>
                    <Link to='/'>Home
                    </Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar