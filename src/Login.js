import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import "./Login.css";
import { auth } from './firebase';


const Login = () => {

   const navigate=useNavigate();
   const[email,setEmail]=useState("");
   const[password,setPassword]=useState("");
   
   const signIn=(e)=>{
     e.preventDefault();
     //firebase login
     auth.signInWithEmailAndPassword(email,password)
     .then(auth=>{
        navigate("/");
     }).catch(error=>alert(error.message));
    }; 
   
    const register=(e)=>{
    e.preventDefault();
    //firebase register
    //Successfully created a new user
     auth.createUserWithEmailAndPassword(email,password)
     .then((auth)=>{console.log(auth)
      if (auth){
        navigate("/");
      }   
     })
     .catch(error=> alert(error.message));
    };
     

   return (
    <div className='login'>
      <Link to="/">
      <img className='login__logo' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51HCHFclmmL.jpg" alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form >
          <h5>E-mail</h5>
          <input type="email" value={email} onChange={e=> setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={e=> setPassword(e.target.value)} />  
         <button onClick={signIn} className='login__signInbutton'> Sign In</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>
      </div>
       <p>New to Amazon? </p>
        <button onClick={register} className="login__registerbutton">Create your Amazon account</button>
     </div>
  )
}

export default Login
