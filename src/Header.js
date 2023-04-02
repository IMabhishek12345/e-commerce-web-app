import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './Stateprovider';
import { auth } from './firebase';

const Header = () => {
  //const [state,dispatch]=useStateValue();
  const [{basket,user},dispatch]=useStateValue(); //since state contains basket that's why we are destructuring it 
   // Now our state also contain user
     
    const handleAuthentication=()=>{
      if (user){
        auth.signOut();
      }
    } 
    return (
    <div className='header'>
      <Link to="/">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZ5TIn7NBppEK3dGGm4DkdscCVJf6Yjj5QA&usqp=CAU" alt="" className='header__logo' />
      </Link>      
      <div className="header__search">
        <input className="header__searchIn" type="text" />
          <SearchIcon className='header__searchIcon'/>
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} >
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionLine1">
            Hello {user?user.email:"Guest"}
          </span>     
          <span className="header__optionLine2">
           {user?"Sign out": "Sign In"}
          </span>     
        </div>
        </Link>

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
      <Link to="/checkout">
      <div className="header__optionBasket">
        <ShoppingBasketIcon/>
        <span className='header__optionLine2 header__basketCount'>{basket?.length}</span>
        {/* {basket?.length}:- optional chaining is used here to handle error cases  gracefully if there */}
      </div>
      </Link>
    </div>
  )
}

export default Header
