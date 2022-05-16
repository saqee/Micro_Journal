import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import CreatePost from './pages/CreatePost'
import { useState } from 'react'
import {signOut} from 'firebase/auth'
import {auth} from './firebaseconfig'
function App() {
 /*  const navigate=useNavigate() */
  const [isAuth,setIsAuth]=useState(localStorage.getItem("isAuth")) 
  const signUserOut=()=>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false)
       /* navigate('/login') */
       window.location.pathname="/login"
    })
  }
  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
  
      {!isAuth ? <Link to="/login">Login</Link> : 
          <>
       <Link to="/createpost">CreatePost</Link>
      <button onClick={signUserOut}>log Out</button> 
      </>
      }
    </nav>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" exact element={<Login  setIsAuth={setIsAuth } />} />
      <Route path="/createpost" exact element={<CreatePost />} />
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
