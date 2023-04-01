import React from 'react'
import "./Product.css";
import { useStateValue } from './Stateprovider';

const Product = ({id,title,image,price}) => {
     
    const [state,dispatch]=useStateValue();

    const addtoBasket=()=>{
      //dispatch the action into the data layer
      dispatch({
        type: "ADD_TO_BASKET",
        item:{
          id:id,
          title:title,
          image:image,
          price:price
        }
      })
    } 
    return (
    <div className='product'>
     <div className="product__info">
        <p>{title}</p>
        <p className='product__price'>
            <small>₹</small>
            <strong>{price}</strong>
        </p>
            
     </div>
      <img src={image} alt="" />
      <button onClick={addtoBasket}> Add to Cart</button>
    </div>
  )
}

export default Product
