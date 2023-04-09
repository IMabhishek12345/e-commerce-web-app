import React from 'react'
import data from "./data";
import Product from './Product';

const SearchProducts = () => {
    
    const inputid=document.getElementById("searchIn");
    console.log(inputid.value);
    try{
        const item=data.filter(ele=>ele.title.toLowerCase().includes(inputid.value))[0];
        console.log(item);
        return (
            
            <div>
               <h1> Your search results</h1>
               <Product 
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
               />
            </div>
            )
     }catch(error){
         <h2>Not found {error.message}</h2>
     }
        
         
    

}

export default SearchProducts
