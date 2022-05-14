import React,{useContext} from 'react'
import StateContext from '../context/ProductContext'

function Pizza({price,size,qt,urlImg,name,type,id}) {

    const {cart, addProductInCart}= useContext(StateContext)

    const getPrice=()=>{
        return price*qt
    }

    const addOnePizza=(id,type,size,name)=>{
        let cartTmp= [...cart];
        cartTmp.forEach(pizza=>{
           if(pizza.name === name && pizza.sizeSelected === size && pizza.typePizza === type){
               console.log(pizza)
               pizza.qt +=1
           }
        })

      addProductInCart([...cartTmp])
    }
    const removeOnePizza=(e)=>{
         let cartTmp= [...cart];
         cartTmp.forEach(pizza=>{
            if(pizza.name === name && pizza.sizeSelected === size && pizza.typePizza === type){
               if(pizza.qt===1){
                let newCart= cartTmp.filter(item=>{
                    if(item.name=== name && item.sizeSelected=== size && item.typePizza=== type){
                        
                    }else{
                       return item
                    }
                })
                addProductInCart([...newCart])
               }
               else{
                console.log(pizza)
                pizza.qt -=1
                addProductInCart([...cartTmp])
               }
            }
         })
 
        
        
        
        
        
        
      
    }
    const cleanCart=(e)=>{
        addProductInCart([])
 

    }
    const deletePizza=(e)=>{
         let cartTmp= [...cart];
         cartTmp.forEach(pizza=>{
            if(pizza.name === name && pizza.sizeSelected === size && pizza.typePizza === type){
                let newCart= cartTmp.filter(item=>{
                    if(item.name=== name && item.sizeSelected=== size && item.typePizza=== type){
                        
                    }else{
                       return item
                    }
                })
                addProductInCart([...newCart])
            }
         })
 
        
      
    }
  
  return (
    <div className="cart-final__item pizza">
    <div className="pizza__body">
        <div className="pizza__img">
            <img src={`/product/${urlImg}`} alt="pizza" />
        </div>
        <div className="pizza__info">
            <h5 className="pizza__name">{name}</h5>
            <h6 className="pizza__type">{type} тесто, {size}</h6>
        </div>

    </div>
    <div className="pizza__quantity">
        <div className="pizza__quantity-btn" onClick={(e)=> removeOnePizza(e)}>
            <img src="/img/moins.png" alt=" logo" />
        </div>
        <div className="pizza__quantity-number">
           {qt}
        </div>
        <div className="pizza__quantity-btn" onClick={()=>addOnePizza(id,type,size,name)}>
            <img src="/img/plus.png" alt=" logo" />
        </div>
    </div>
    <div className="pizza__left">
        <div className="pizza__price">
            <span className="pizza__price-number">{qt<=1?price:getPrice()}</span>
            <span className="pizza__price-device">₽</span>
        </div>
        <div className="pizza__rem" onClick={(e)=>deletePizza(e)}>
            <img src="/img/remoove.png" alt="delete button" />
        </div>
    </div>
</div>
  )
}

export default Pizza