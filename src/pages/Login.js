import React from 'react'
import {auth,provider}from '../firebaseconfig'
import { signInWithPopup } from 'firebase/auth'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
const Login = ({setIsAuth}) => {
  const navigate=useNavigate()
  const signInWithGoogle=()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    localStorage.setItem('isAuth',true);
    setIsAuth(true)
    navigate("/")
  })
  }
  return (
    <div className='loginPage'>
      <p>Sign In With Google</p>
      <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign In With Google </button>
    </div>
  )
}

export default Login