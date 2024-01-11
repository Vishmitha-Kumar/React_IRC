import React, {useRef} from 'react'

const LoginForm=()=>{
    const emailInputRef=useRef(null)
    const passwordInputRef=useRef(null)

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
        <input type='email' placeholder='email' id='email'ref={emailInputRef} />
        <input type='password' placeholder='password' id='password'ref={passwordInputRef} />
        <input type='submit' value='Login'/>
        </form>
        </div>
    )
}
export default LoginForm