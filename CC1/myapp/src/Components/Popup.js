// import React from 'react'
// import { useState } from 'react'
// import '../Assets/Css/popup.css'




// const Popup = () => {

//     const { data, setData } = useState({
//         Username: '',
//         Password: ''
//     })
//     const handleChange = (e) => {
//         setData({ ...data, [e.target.id]: e.target.value })
//         console.log(data.Username)
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         alert('Login Successful')
//     }
//     return (
//         <div>
//             <div className="navbar">
//                 <h1>The PetNest</h1>
//                 <img className="logo" src={logo} />
//                 <ul>
//                     <li>
//                         <a href="#">Home</a>
//                         <a href="#">Adopt me</a>
//                         <a href="#">Pet Shop</a>
//                         {/* <button className="btn"><a href="#">Login</a></button> */}
//                     </li>
//                     <li onClick={toggle}>
//                         Login
//                     </li>
//                 </ul>
//             </div>
//             visible ? (
//                 <div className='card-wrap'>
//                     <div className="">
//                         <h2 className="auth-title">Login</h2>
//                         <form className="auth-container h-30 shadow" onSubmit={handleSubmit}>
//                             <input type="text" placeholder="Username" id="Username" onChange={handleChange} required />
//                             <input typr="password" placeholder="Password" id="Password" onChange={handleChange} required />
//                             <input type="submit" value="Login" />
//                         </form>
//                     </div>
//                 </div>
//                 )
          
//         </div>
            
//     )
// }
// export default Popup 

import React, { useState } from 'react';
import '../Assets/Css/popup.css';
import logo from 'path-to-your-logo'; // Replace 'path-to-your-logo' with the actual path to your logo

const Popup = () => {
  const [data, setData] = useState({
    Username: '',
    Password: ''
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
    console.log(data.Username);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login Successful');
  };

  const toggle = () => {
    // Implement your logic to toggle the visibility of the popup
    console.log('Toggle visibility');
  };

  return (
    <div>
      <div className="navbar">
        <h1>The PetNest</h1>
        <img className="logo" src={logo} alt="Logo" />
        <ul>
          <li>
            <a href="#">Home</a>
            <a href="#">Adopt me</a>
            <a href="#">Pet Shop</a>
          </li>
          <li onClick={toggle}>Login</li>
        </ul>
      </div>
      {/* Check if the popup is visible */}
      {visible && (
        <div className="card-wrap">
          <div className="">
            <h2 className="auth-title">Login</h2>
            <form className="auth-container h-30 shadow" onSubmit={handleSubmit}>
              <input type="text" placeholder="Username" id="Username" onChange={handleChange} required />
              <input type="password" placeholder="Password" id="Password" onChange={handleChange} required />
              <input type="submit" value="Login" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
