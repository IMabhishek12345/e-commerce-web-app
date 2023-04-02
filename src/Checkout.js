import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './Stateprovider';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
     //const [state,dispatch]=useStateValue();
    const [{basket,user}]=useStateValue(); //since state contains basket that's why we are destructuring it 
    // Now our state also contain user

    return (
    <div className='checkout'>
      <div className="checkout__left">
       
       <div> 
       <h3>Hello, {user?user.email:""}</h3>
       <h2 className='checkout__title'>Your shopping basket</h2>
        {basket.map((item)=>(
        <CheckoutProduct 
           id={item.id}
           price={item.price}
           image={item.image}
           title={item.title}
        />
        ))}
        {/* CheckoutProduct */}
        {/* CheckoutProduct */}
        {/* CheckoutProduct */}
        {/* CheckoutProduct */}
       
       
       </div>
     
      </div>
       <div className="checkout__right">
         <Subtotal/>
         
       </div>
     

    </div>
  )
}

export default Checkout
