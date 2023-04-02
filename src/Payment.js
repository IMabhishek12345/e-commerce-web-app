import React from 'react'
import "./Payment.css";
import { useStateValue } from './Stateprovider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

const Payment = () => {
    
    //const [state,dispatch]=useStateValue();
    const [{basket,user},dispatch]=useStateValue(); //since state contains basket that's why we are destructuring it 
    // Now our state also contain user

  
    return (
    <div className='payment'>
      <div className="payment__container">
        <h1> Checkout (<Link to="/checkout">{basket?.length} items</Link> )</h1>
        
        
        {/* payment section->>> delivery address*/}
         <div className='payment__section'>
           <div className="payment__title">
             <h3>Delivery address</h3>
           </div>
         <div className="payment__address">
            <p>{user?.email}</p>
            <p>IP extension </p>
            <p>Patparganj</p>
            <p>Delhi-110092</p>
        </div>
        
    </div>
      
        {/* payment section->>> Review items*/}
        <div className='payment__section'>
           <div className="payment__title">
             <h3> Review Items and delivery</h3>
           </div>
            <div className="payment__Items">
                {basket.map(item=>(
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </div>   
         </div>

        {/* payment section->>> payment method */}
        
        <div className='payment__section'>
           <div className="payment__title">
               <h3>Payment Method</h3>
           </div>
           <div className="payment__details">
             {/* using Stripe payment functionality */}

           </div>
         </div>


      </div>
    </div>
  )
}

export default Payment
