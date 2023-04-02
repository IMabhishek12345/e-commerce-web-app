import React from 'react'
import "./Subtotal.css";
import { CheckBox } from '@mui/icons-material';
import { useStateValue } from './Stateprovider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

const Subtotal = () => {
    //const [state,dispatch]=useStateValue();
     const [{basket},dispatch]=useStateValue(); //since state contains basket that's why we are destructuring it 
              
    const navigate= useNavigate(); 
    let inr = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    });
    return (
    <div className='subtotal'>
     <p> Subtotal ({basket?.length} items): <strong>{inr.format(getBasketTotal(basket))}</strong></p>
      <small className='subtotal__gift'>
        <input type="checkbox" />This order contains gift
      </small>
    
     <button onClick={e=>navigate("/payment")}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
