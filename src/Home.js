import React from 'react'
import "./Home.css";
import Product from './Product';

const Home = () => {
    return (
        <div className='home'>
        <div className="home__container">
        
         <img className="home__image" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/815-245OLFL._SX3000_.jpg" alt="" />
        
        <div className="home__row">
            <Product id={12345} title="Home appliances" image={"https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"} price={4999} />
            <Product id={12346} title="Laptop"  image={"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"} price={45000} />
        </div>
            
        <div className="home__row">
            <Product id={12347} title="Earbuds new launch boat" image={"https://m.media-amazon.com/images/I/31FADBaOJ+L._AC_UF226,226_FMjpg_.jpg"} price={999} />
            <Product id={12348} title="Mobile apple  products" image={"https://m.media-amazon.com/images/I/41TkEG03LaL._AC_UF226,226_FMjpg_.jpg"} price={35999} />
            <Product id={12349} title="Trolly and backpacks" image={"https://m.media-amazon.com/images/I/41wN8UcVDuL._AC_UF226,226_FMjpg_.jpg"} price={9999} />          
        </div>
        <div className="home__row">
            <Product id={12350} title="Smart televison " image={"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71L-lTQnJiL._AC_UY218_.jpg"} price={4999} />
        </div>
    
       </div>
    
    </div>
  )
}

export default Home
