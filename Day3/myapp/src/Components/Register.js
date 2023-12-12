import Nav from './Nav'
import '../Assets/Css/nav.css'
function Register()
{
    return(
        <div>
            <Nav/>
            <div class="wrap">
        <div class="reg">
        <form>

            <h3>Registration Form</h3>

            <input type="text" id="user" placeholder="Username" className="auth-input" required />

            <input type="email" placeholder="Email" className="auth-input" required />

            <input type="password" id="pwd" placeholder="Password" className="auth-input" required />
            

            <input type="tel" placeholder="Phone" className="auth-input" required/>
            <input type="number" placeholder="Age" className="auth-input" />

            <input type="textarea" placeholder="Address" className="auth-input" />

            <input type="submit" value="Register" className="auth-btn" />

        </form>
        </div>
    </div>
</div>
    )
}
export default Register