
import Nav from './Nav'
import '../Assets/Css/nav.css'
function Login() {
    return (
        <div>
            <Nav/>
            <div class="wrapper">
                
            <div class="register">
                <form>

                    <h3>Login</h3>

                    <input type="text" id="user" placeholder="Username" class="auth-input" required/>

                        <input type="email" placeholder="Email" class="auth-input" required/>

                            <input type="password" id="pwd" placeholder="Password" class="auth-input" required/>
                                <input type="submit" value="Login" class="auth-btn"/>


                                </form>
                            </div>
                        </div>
                        </div>
                        )
}
                        export default Login







