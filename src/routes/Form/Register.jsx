import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './Form.css'

const Register = () => {
  const [email,setEmail]= useState("");
  const [username,setUsername]= useState("");
  const [password,setPassword]= useState("");
  const [showPassword , setShowPassword] = useState(false)

  const submitFormHandler = (e) => {
    e.preventDefault();
    if(email.trim() === ""){
      return toast.error("Email is Required");
    }
    if(username.trim() === ""){
      return toast.error("Username is Required");
    }
    if(password.trim() === ""){
      return toast.error("Password is Required");
    }
    setEmail("")
    setUsername("")
    setPassword('')
  }

  const showPasswordHandler = () => {
    setShowPassword(prev=>!prev)
  }

  return (
    <section className='wrapper'>
    <ToastContainer theme='colored'/>
      <h2>Create New Account</h2>
      <form className='form' onSubmit={submitFormHandler}>
        <input value={email} onChange={e=>setEmail(e.target.value)} type='email' placeholder='Email *'/>
        <input value={username} onChange={e=>setUsername(e.target.value)} type='text' placeholder='Username *'/>
        <input value={password} onChange={e=>setPassword(e.target.value)} type={showPassword ? "text" : "Password"} placeholder='password *'/>
        {showPassword
          ? <i className='bi bi-eye-slash-fill show-password-register-icon' onClick={showPasswordHandler}></i>
          : <i className='bi bi-eye-fill show-password-register-icon' onClick={showPasswordHandler}></i>
        }
        <button className='form-btn' type='submit'>Register</button>
      </form>
      <div className='form-footer'>
        <p>Already have an Account ? </p>
        <Link to='/login' className='footer-link'>login</Link>
      </div>
    </section>
  )
}

export default Register
