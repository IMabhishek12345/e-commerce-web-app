import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './Stateprovider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';

const stripePromise = loadStripe("pk_test_51Mmb4vSFAefFlH5LfpQnnHApVFc4NnqZrZXyWb7mCz4L6D3FiEDt1ZAcHGjzI84pH742alh9pZDqIYLwzW6QB6ll00FfJlUUez");

function App() {
   //const [state,dispatch]=useStateValue();
   const [{basket},dispatch]=useStateValue(); //since state contains basket that's why we are destructuring it 

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log("The user is >>>>",authUser);
    if (authUser){
      //User has just logged in
      dispatch({
        type: "SET_USER",
        user: authUser
      })
    } else{
     //User has  logged out
     dispatch({
      type: "SET_USER",
      user: null
    })
  }
    })
  },[])

  return (
     //BEM convention 
    <Router>
    <div className="app">
     
     <Routes>

      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/" element={[<Header/>,<Home/>]}/>
      <Route exact path="/checkout" element={[<Header/>,<Checkout/>]}/>
      <Route exact path="/orders" element={[<Header/>,<Orders/>]}/>
      <Route exact path="/payment" element={<Elements stripe={stripePromise}>
      [<Header/>,<Payment/>]
       </Elements>}/>
      
         
     </Routes>

     </div>
   </Router>
  );
}

export default App;
