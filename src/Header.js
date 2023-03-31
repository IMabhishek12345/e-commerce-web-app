import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = () => {
  return (
    <div className='header'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZ5TIn7NBppEK3dGGm4DkdscCVJf6Yjj5QA&usqp=CAU" alt="" className='header__logo' />
    
      <div className="header__search">
        <input className="header__searchIn" type="text" />
          <SearchIcon className='header__searchIcon'/>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLine1">
            Hello Guest
          </span>     
          <span className="header__optionLine2">
           Sign In
          </span>     
        </div>
        <div className="header__option">
        <span className="header__optionLine1">
            Returns
          </span>     
          <span className="header__optionLine2">
            &Orders
          </span> 
        </div>
        <div className="header__option">
        <span className="header__optionLine1">
            Your 
          </span>     
          <span className="header__optionLine2">
           Prime
          </span> 
        </div>
      </div>
      <div className="header__optionBasket">
        <ShoppingBasketIcon/>
        <span className='header__optionLine2 header__basketCount'>0</span>
      </div>
    
    </div>
  )
}

export default Header
