import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [showPassword , setShowPassword] = useState(false)

  // Handle Submit on Form
  const submitFormHandler = (e) => {
    e.preventDefault();
    if(email.trim() === ""){
      return toast.error("Email is Required");
    }
    if(password.trim() === ""){
      return toast.error("Password is Required");
    }
    setEmail("")
    setPassword('')
  }

  // Handle Password
  const showPasswordHandler = () => {
    setShowPassword(prev=>!prev)
  }

  return (
    <section className='wrapper'>
    <ToastContainer theme='colored'/>
      <h2>Login to your Account</h2>
      <form className='form' onSubmit={submitFormHandler}>
        <input value={email} onChange={e=>setEmail(e.target.value)} type='email' placeholder='Email *'/>
        <input value={password} onChange={e=>setPassword(e.target.value)} type={showPassword ? "text" : "Password"} placeholder='password *'/>
        {showPassword
          ? <i className='bi bi-eye-slash-fill show-password-icon' onClick={showPasswordHandler}></i>
          : <i className='bi bi-eye-fill show-password-icon' onClick={showPasswordHandler}></i>
        }
        <button className='form-btn' type='submit'>login</button>
      </form>
      <div className='form-footer'>
        <p>Don't have an Account ? </p>
        <Link to='/register' className='footer-link'>Register</Link>
      </div>
    </section>
  )
}

export default Login
