import React,{useContext} from 'react';
import {Link} from 'react-router-dom'
import '../style/header.css';
import StateContext from '../context/ProductContext';

function Header() {

    const {cart}=useContext(StateContext)

    const getTotalPrice=()=>{
       let total=0;
       cart.forEach(pizza => {
           total+= pizza.price * pizza.qt
       });

       return total
    }
    

  return (
    <header className='header'>
        <div className="header__container _container">
            <Link to='/'>
                <div className="header__logo">
                    <div className="header__logo-img">
                        <img src="/img/logo.png" alt=" logo of restaurant" />
                    </div>
                    <div className="header__logo-body">
                        <span className="header__logo-name">REACT PIZZA</span>
                        <span className="header__logo-description">самая вкусная пицца во вселенной</span>
                    </div>
                </div>
            </Link>
            <Link to='/cart'>
                <div className="header__cart cart"> 
                    <div className="cart__price">
                        <span className='cart__price-number'>
                            {
                                getTotalPrice()
                            }
                        </span>
                        <span className='cart__price-device'>₽</span>
                    </div>
                    <div className="">|</div>
                    <div className="cart__detail">
                        <div className="cart__icon">
                            <img src="/img/cart.svg" alt="icon cart"  onClick={()=> console.log(this)}/>
                        </div>
                        <div className="cart__qt-product">{cart.length}</div>
                    </div>
                </div>
            </Link>
            
        </div>
    </header>
    
  )
}

export default Header