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
                   <button className="btn"><a href="#">Login</a></button>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Nav