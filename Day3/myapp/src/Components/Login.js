import React, { useState } from 'react';
import Nav from './Nav';
import '../Assets/Css/nav.css';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Login() {

  const navH = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (username === 'Isai' && password === '0706') {
      // alert('Welcome!');
      navH('/home')
      
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      {/* <Nav /> */}
      <div className="wrapper">
        <div className="register">
          <form onSubmit={handleSubmit}>
            <h3>The PetNest</h3>
            <h3>Login</h3>
            <input
              type="text"
              id="user"
              placeholder="Username"
              className="auth-input"
              required
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              type="password"
              id="pwd"
              placeholder="Password"
              className="auth-input"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            
            <input type="submit" value="Login" className="auth-btn" />
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;