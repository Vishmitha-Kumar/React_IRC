import './Assets/css/style.css'
import Nav from './Components/Nav'
import login from './Components/login'
function App() {
    return (
        <div>
            <Nav />
            <login/>

            <div class="register">
                <form onsubmit="register()">

                    <h3>Registration Form</h3>

                    <input type="text" id="user" placeholder="Username" className="auth-input" required />

                    <input type="email" placeholder="Email" className="auth-input" required />

                    <input type="password" id="pwd" placeholder="Password" className="auth-input" required />
                    <input type="password" id="cpwd" placeholder="Conformpassword" className="auth-input" required />

                    <input type="tel" placeholder="Phone" className="auth-input" />

                    <input type="date" placeholder="DOB" className="auth-input" />

                    <input type="submit" value="Register" className="auth-btn" />

                </form>

            </div>
        </div>
    )
}
export default App