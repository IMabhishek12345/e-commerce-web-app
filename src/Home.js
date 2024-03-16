import React from 'react'
import "./Home.css";
import Product from './Product';
  
const Home = () => {
    return (
        <div className='home'>
          
        <div className="home__container">
                {/* <img  src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/815-245OLFL._SX3000_.jpg" className="d-block w-100" alt="..."/>
                <img src="https://m.media-amazon.com/images/I/61+Om+g+8SL._SX3000_.jpg" className="d-block w-100" alt="..."/>
                <img  src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/MARCHGTM/IPL2023/1percentCB/Recharge_PC_Hero_3000x1200_1._CB593370740_.jpg" className="d-block w-100" alt="..."/> */}
        
         {/* <img className="home__image" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/815-245OLFL._SX3000_.jpg" alt="" /> */}
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://m.media-amazon.com/images/I/61+Om+g+8SL._SX3000_.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/MARCHGTM/IPL2023/1percentCB/Recharge_PC_Hero_3000x1200_1._CB593370740_.jpg" className="home__image" class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
     </button>
   </div>    


        <div className="home__row">
            <Product id={12345} title="Home appliances" image={"https://m.media-amazon.com/images/I/61qWeUnn9TL._AC_UL320_.jpg"} price={4999} />
            <Product id={12346} title="Laptop"  image={"https://m.media-amazon.com/images/I/616gUvx+8NL._AC_UL320_.jpg"} price={45000} />
        </div>
            
        <div className="home__row">
            <Product id={12347} title="Earbuds new launch boat" image={"https://m.media-amazon.com/images/I/31FADBaOJ+L._AC_UF226,226_FMjpg_.jpg"} price={999} />
            <Product id={12348} title="Mobile apple  products" image={"https://m.media-amazon.com/images/I/41TkEG03LaL._AC_UF226,226_FMjpg_.jpg"} price={35999} />
            <Product id={12349} title="Trolly and backpacks" image={"https://m.media-amazon.com/images/I/41wN8UcVDuL._AC_UF226,226_FMjpg_.jpg"} price={9999} />          
        </div>
        <div className="home__row">
            <Product id={12350} title="Smart televison " image={"https://m.media-amazon.com/images/I/81s35LoX36L._AC_UY218_.jpg"} price={4999} />
        </div>
    
       </div>
    
    </div>
  )
}

export default Home
