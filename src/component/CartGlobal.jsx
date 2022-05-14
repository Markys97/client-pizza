import React,{useContext} from 'react';
import '../style/cart-final.css'

import Pizza from './Pizza';
import StateContext from '../context/ProductContext';
import { Link } from 'react-router-dom';

const CartGlobal = () => {

    let {cart,addProductInCart}= useContext(StateContext);

    const deletePizza=(e)=>{
        let cartTmp= [...cart];
        addProductInCart([])

       
     
   }
   const getPriceTotal=()=>{
    let cartTmp= [...cart];
    let total=0;
    cartTmp.forEach(pizza=>{
        total+= pizza.price*pizza.qt;
    })

    return total;
   }
    return <>
        {cart.length !==0?(
        <section className='cart-final'>
            <div className="cart-final__container">
                <div className="cart-final__top">
                    <h2 className="cart-final__title">
                        <img src="/img/panier.svg" alt="icon" className="cart-final__title-img" />
                        <span className="cart-final__title-text">Корзина</span>
                    </h2>
                    <h4 className="cart-final__clean "onClick={()=>deletePizza()}>
                        <img src="/img/delete.svg" alt="icon" className="cart-final__clean-img" />
                        <span className="cart-final__clean-text" >Очистить корзину</span>
                    </h4>
                </div>
                <div className="cart-final__content">
                   {
                       cart.map(pizza=> (
                          <Pizza
                           key={pizza.id+'-'+pizza.sizeSelected+'-'+pizza.typePizza} 
                           name={pizza.name}
                            qt={pizza.qt} 
                           type={pizza.typePizza} 
                           size={pizza.sizeSelected}
                           price={pizza.price}
                           urlImg={pizza.img}
                           id={pizza.id}
                           />
                       ))
                   }
                </div>
                <footer className="cart-final__footer">
                   <div className="cart-final__details">
                        <p className="cart-final__total-qt">
                                
                                <span  className="cart-final__total-qt-title"> Всего пицц:</span>
                                <span  className="cart-final__total-qt-number"> {cart.length} </span> шт.
                        </p>
                        <p className="cart-final__total-price">
                            
                            <span className="cart-final__total-price-title">Сумма заказа:</span>
                            <span className="cart-final__total-price-number"> {getPriceTotal()} ₽</span>
                        </p>
                   </div>
                   <div className="cart-final__btns">
                      <Link to="/" >
                        <button className="cart-final__btn btns">
                                <img src="/img/btn.png" alt="icon button" className="btn__img" />
                                <span className="btns__text ">Вернуться назад</span>
                        </button>
                      </Link>
                       <button className="cart-final__btn btns btns--orange">
                          
                            <span className="btns__text btns__text--white">Оплатить сейчас</span>
                       </button>
                   </div>
                </footer>
                

            </div>
        </section>
        ):(
        
        <section className="cart-empty">
            <div className="cart-empty__container _container">
                <div className="cart-empty__content">
                    <h2 className="cart-empty__title">Корзина пустая 😕</h2>
                    <p className="cart-empty__text">
                         Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на главную страницу.
                    </p>
                    <div className="cart-empty__img">
                        <img src="/img/shoping.png" alt=" shoping" />
                    </div>
                    <Link to="/">
                        <button className="cart-empty__btn btns btns--blue">
                            
                            <span className="btns__text btns__text--white">Вернуться назад</span>
                        </button>
                    </Link>
                    
                    
                </div>
            </div>
      </section>
        )}
      

      </>
    
}

export default CartGlobal;
