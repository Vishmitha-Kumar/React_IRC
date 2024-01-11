import {useRef} from 'react'
import React from 'react'

const Form=()=>{
    const emailInputRef=useRef(null);
    const passwordInputRef=useRef(null);

    const handleSubmit=(e)=>{
       e.preventDefault()
      
       const formData={
    email:emailInputRef.current.value,
    password:passwordInputRef.current.value
       }
       console.log(formData)
       emailInputRef.current.value=''
       passwordInputRef.current.value=''
       emailInputRef.current.focus()
    }

       return(
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type='email' id='email' placeholder='email' ref={emailInputRef}/>
             <label htmlFor="password">Password</label>
            <input type='password' id='password' placeholder='password' ref={passwordInputRef}/>
            <input type='submit' value='Login'/>
            </form>
        </div>
       )

    }

export default Form





// import React, { useRef } from 'react';
// // import '../assets/css/Form.css';

// const LoginForm = () => {
//     const emailInputRef = useRef(null);
//     const passwordInputRef = useRef(null);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const formData = {
//             email: emailInputRef.current.value,
//             password: passwordInputRef.current.value
//         };

//         console.log(formData);
//         emailInputRef.current.value = '';
//         passwordInputRef.current.value = '';
//         emailInputRef.current.focus();
//     }

//     return (
//         <div className='form__container'>
//             <form className='register__form' method='POST' onSubmit={handleSubmit}>
//                 <div className="input__fields">
//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         required
//                         ref={emailInputRef}
//                     />
//                 </div>
//                 <div className="input__fields">
//                     <label htmlFor="password">Password</label>
//                     <input
//                         type="password"
//                         name="password"
//                         id="password"
//                         required
//                         minLength={8}
//                         maxLength={15}
//                         ref={passwordInputRef}
//                     />
//                 </div>
//                 <button className='submit__btn' type="submit">Login</button>
//             </form>
//         </div>
//     );
// }

// export default LoginForm;