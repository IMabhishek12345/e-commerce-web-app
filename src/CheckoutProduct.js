import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './Stateprovider';

const CheckoutProduct = ({ id, image, price, title, hideButton }) => {
    //const [state,dispatch]=useStateValue();
    const [{basket},dispatch]=useStateValue(); //since state contains basket that's why we are destructuring it     
    const removefromBasket=()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            item:{
                id:id,
                image:image,
                price:price,
                title:title
            } 
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                {!hideButton && (
                 <button onClick={removefromBasket}>Remove from the basket</button>
                )}

            </div>

        </div>
    )
}

export default CheckoutProduct

