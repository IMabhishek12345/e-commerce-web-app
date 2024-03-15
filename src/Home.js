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
         <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg"/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src="https://m.media-amazon.com/images/I/61+Om+g+8SL._SX3000_.jpg" className="home__image" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/MARCHGTM/IPL2023/1percentCB/Recharge_PC_Hero_3000x1200_1._CB593370740_.jpg" className="home__image" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

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
