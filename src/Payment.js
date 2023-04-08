import React, { useEffect, useState } from 'react'
import "./Payment.css";
import { useStateValue } from './Stateprovider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import axios from './axios';

const Payment = () => {

    //const [state,dispatch]=useStateValue();
    const [{ basket, user }, dispatch] = useStateValue(); //since state contains basket that's why we are destructuring it 
    // Now our state also contain user
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState(false);
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setclientSecret]=useState(true);
    const navigate=useNavigate();

    let inr = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    });
    useEffect(()=>{
      const getClientSecret=async()=>{
              const response=await axios({
                method: "post",
                //stripe expects the total in currency subunits
                url: `/payments/create?total=${getBasketTotal(basket)* 100 }`  
              })
           setclientSecret(response.data.clientSecret)
              
      } 
      getClientSecret(); 
    },[basket])
    console.log("The secret key is",clientSecret);

    const handleSubmit = async (event) => {
      event.preventDefault();
      setProcessing(true);
      const payload=await stripe.confirmCardPayment(clientSecret,{
           payment_method:{
            card: elements.getElement(CardElement)
           }
      }).then(({paymentIntent})=>{  
       //then((response))=>  :- here i have destructure the response to get paymentIntent
      // and paymentIntent is same as paymentconfirmation 
         setSucceeded(true);
         setError(null);
         setProcessing(false);   
         navigate("/orders")
      })
        
    }
    const handleChange = (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }
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
                        {basket.map(item => (
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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <h3>Order Total {inr.format(getBasketTotal(basket))}</h3>

                                <button disabled={processing || disabled || succeeded}></button>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Payment
