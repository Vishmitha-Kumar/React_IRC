import { useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

  import 'react-toastify/dist/ReactToastify.css';
const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const toggle = () => {
        setVisible(!visible)
    }

    // const nameInputRef = useRef(null)
    const email=useRef(null)
    const name=useRef(null)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const password = useRef(null)
    const num=useRef(null)
    const tel=useRef(null)

    const [errors,setErrors] = useState({
        email: '',
        password: '',
        name:'',
        num:'',
        tel:''
    })

    const SignUp = (e) => {
        e.preventDefault();

        const formData = {
            email: email.current.value,
            password: password.current.value,
            tel:tel.current.value,
            
        }
        console.log(formData.email.length)
        if(formData.email.length === 0)
        {
            setErrors({ ...errors,email: 'Email is empty !'});
        }
        else if(!emailRegex.test(formData.email))
        {
            setErrors({...errors,email: 'Invalid email format!'});
        }
        else 
        {
            setErrors({ ...errors,email: ''});
            if(formData==="v@gmail.com" && formData.password==='1234')
            {
                console.log(formData.email)
                toast.success('Successful!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });

            }
            else{
                toast.error('Invaild email/password', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }
        }
        if(formData.tel.length <10)
        {
            setErrors({...errors,tel:'Number must be 10 digits'})
        } 

        email.current.value = ''
        password.current.value = ''
       tel.current.value=''
     

    }
    const Login = (e) => {
        e.preventDefault();

        const formData = {
            email: email.current.value,
            password: password.current.value,
            tel:tel.current.value,
            
        }
        console.log(formData.email.length)
        if(formData.email.length === 0)
        {
            setErrors({ ...errors,email: 'Email is empty !'});
        }
        else if(!emailRegex.test(formData.email))
        {
            setErrors({...errors,email: 'Invalid email format!'});
        }
        else 
        {
            setErrors({ ...errors,email: ''});
            if(formData==="v@gmail.com" && formData.password==='1234')
            {
                console.log(formData.email)
                toast.success('Successful!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });

            }
            else{
                toast.error('Invaild email/password', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }
        }
        if(formData.tel.length <10)
        {
            setErrors({...errors,tel:'Number must be 10 digits'})
        } 

        email.current.value = ''
        password.current.value = ''
       tel.current.value=''
     

    }
    // const handleCahnge = (e) => {
    //     setData({ ...data, [e.target.id]: e.target.value })
    // }
    return (
        <>
            <div>
                <div className="navbar">
                    {/* <div className="navtitle">
                        Hello world
                    </div> */}
                    <ul className="navlinks">

                        {/* <li>
                            Home
                        </li>

                        <li>
                            About
                        </li>
                        <li>
                            Contact
                        </li> */}
                        <li onClick={toggle}>
                            Login
                        </li>
                        <li onClick={toggle}>
                            SignUp
                        </li>
                    </ul>
                </div>
                {visible ? (
                    <div className='card-wrapper'>
                        <div className="">
                            {/* <h2 className="auth-title">SignUp</h2> */}
                            <form className="auth-container h-80v shadow" onSubmit={SignUp}>
                                <input type="text" name="" id="name" placeholder="name" className="auth-input" ref={name} />
                                <input type="email" name="" id="email" placeholder="email" className="auth-input" ref={email} />
                                {
                                    errors.email === '' ?
                                    ''
                                    :
                                    <span className='error-comp'>
                                        {errors.email}
                                    </span>
                                }
                                <input type="password" name="" id="password" placeholder="Password" className="auth-input" ref={password} />
                                
                                <input type="num" name="" id="num" placeholder="Age" className="auth-input" ref={num} />
                                <input type="tel" name="" id="tel" placeholder="Phone" className="auth-input" ref={tel} />
                                
                                {
                                    errors.tel === '' ?
                                    ''
                                    :
                                    <span className='error-comp'>
                                        {errors.tel}
                                    </span>
                                }
                                <span className='btn-container'>
                                    <input type="submit" value="Sign-Up" className="auth-btn w-50" />
                                    <button className='cancel-btn w-50' onClick={toggle}>Cancel</button>
                                </span>
                            </form>
                            <form className="auth-container h-80v shadow" onSubmit={Login}>
                                <input type="text" name="" id="name" placeholder="name" className="auth-input" ref={name} />
                                <input type="email" name="" id="email" placeholder="email" className="auth-input" ref={email} />
                                {
                                    errors.email === '' ?
                                    ''
                                    :
                                    <span className='error-comp'>
                                        {errors.email}
                                    </span>
                                }
                                <input type="password" name="" id="password" placeholder="Password" className="auth-input" ref={password} />
                                
                                <input type="num" name="" id="num" placeholder="Age" className="auth-input" ref={num} />
                                <input type="tel" name="" id="tel" placeholder="Phone" className="auth-input" ref={tel} />
                                
                                {
                                    errors.tel === '' ?
                                    ''
                                    :
                                    <span className='error-comp'>
                                        {errors.tel}
                                    </span>
                                }
                                <span className='btn-container'>
                                    <input type="submit" value="Sign-Up" className="auth-btn w-50" />
                                    <button className='cancel-btn w-50' onClick={toggle}>Cancel</button>
                                </span>
                            </form>
                        </div>
                    </div>
                ) : ('')
                }
            </div>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
        </>
    )
}

export default NavBar