import React from 'react'
import "./Product.css";

const Product = ({id,title,image,price}) => {
 
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
      <button> Add to Cart</button>
    </div>
  )
}

export default Product
