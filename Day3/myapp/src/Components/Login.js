function Login() {
    return (
        <div>
            <div class="register">
                <form onsubmit="register()">

                    <h3>Login</h3>

                    <input type="text" id="user" placeholder="Username" class="auth-input" required/>

                        <input type="email" placeholder="Email" class="auth-input" required/>

                            <input type="password" id="pwd" placeholder="password" class="auth-input" required/>
                                <input type="submit" value="Login" class="auth-btn"/>


                                </form>
                            </div>
                        </div>
                        )
}
export default Login 