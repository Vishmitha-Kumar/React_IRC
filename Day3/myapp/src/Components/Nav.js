import logo from '../Assets/Images/logo.png'
function Nav() {
    return (
        <>
        <div className="navbar">
                    <h1>The PetNest</h1>
                    <img className="logo" src = {logo}/>
            <ul>
                <li>
                    <a href ="#">Home</a>
                    <a href ="#">Adopt me</a>
                    <a href ="#">Pet Shop</a>
                   <a href="#" className="btn">Login</a>
                </li>
            </ul>
        </div>
        </>
    )
}
export default Nav