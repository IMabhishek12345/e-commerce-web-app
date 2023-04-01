import React from 'react'
import "./Subtotal.css";
import { CheckBox } from '@mui/icons-material';

const Subtotal = () => {
    let inr = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    });
    return (
    <div className='subtotal'>
     <p> Subtotal (0 items): <strong>{inr.format(0)}</strong></p>
      <small className='subtotal__gift'>
        <input type="checkbox" />This order contains gift
      </small>
    
     <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
