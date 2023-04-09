import React, { useEffect } from 'react';
import "./Orders.css";
import { useState } from 'react';
import { db } from './firebase';
import { useStateValue } from './Stateprovider';
import Order from './Order';

const Orders = () => {
  //const [state,dispatch]=useStateValue();
  const [{basket,user},dispatch]=useStateValue(); //since state contains basket that's why we are destructuring it 
  // Now our state also contain user
  
  const [orders,setOrders]=useState([]);
  useEffect(()=>{
  
    if (user){

     db.collection("users")
     .doc(user?.uid)
     .collection("orders")
     .orderBy("created","desc")
     .onSnapshot(snapshot=>(
      setOrders(snapshot.docs.map(doc=>({
       data: doc.data(),
       id:  doc.id  
     }))) 
     ))
    }else{
      setOrders([]);
    } 
  
 },[user]);
  
  return (
    <div className='orders'>
       <h1>Your orders</h1>
       <div className="orders__order">
          {orders?.map((order)=>(
            <Order order={order}/>
          ))}
       </div>
    </div>
  )
}

export default Orders
