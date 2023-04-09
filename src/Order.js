import React from 'react'
import "./Order.css";
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';



const Order = ({order}) => {
    
   
    let inr = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    }); 
    return (
    <div className='order'>

     <h2> Order</h2>
     <p>{moment.unix(order.data.created).format("MMMM Do YYYY ,h:mm:ss a")}</p>    
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map(item=>(
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            hideButton
          />
      ))}

      <h3 className='order__total'>Order Total {inr.format(order.data.amount/100)}</h3>

    </div>
  )
}

export default Order
