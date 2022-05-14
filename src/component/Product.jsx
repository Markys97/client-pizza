import React, {useState,useContext} from 'react'
import '../style/product.css';
import StateContext from '../context/ProductContext';

function Product({name,price,img,id}) {

  const {cart,addProductInCart}= useContext(StateContext)
  const sizes= ['26 см.','30 см.','40 см.'];
  const types=['тонкое','традиционное']
  const [sizeSelected, setSize]=useState('26 см.');
  const [typePizza,setTypePizza]= useState('тонкое')
 const [qtPizza,addOneMore]=useState(0);
 const [cartTmp, setCartTmp]=useState([]);






  const differentSize=(sizeSelected)=>{
      if(sizeSelected=== '26 см.'){
        return 'small'
      }else if(sizeSelected === '30 см.'){
        return 'middle'
      }else if(sizeSelected ==='40 см.' ){
        return 'big'
      }
  }

  const addPizza=()=>{
    let qt=1
    let pizza={id,name,price,typePizza,sizeSelected,img,qt};

    let cartTmp= [...cart];
    if(cartTmp.length===0){
      addProductInCart([pizza]);
    }else{
      cartTmp.forEach((pizzaIn)=>{
        if(pizzaIn.name=== pizza.name&&pizzaIn.typePizza===pizza.typePizza &&pizzaIn.sizeSelected===pizza.sizeSelected){
          pizzaIn.qt+=1;
          addProductInCart([...cartTmp]);
        }else{
          addProductInCart([...cartTmp,pizza]);
        }
      })
    }

    getTotalQt(name)
  }

  const getTotalQt=(name)=>{
    let cartTmp= [...cart];
    let listPizza= cartTmp.filter(pizza=>{
      if(pizza.name===name){
        return pizza
      }
    })

    let total=0;
    listPizza.forEach(elt=>{
      total+=elt.qt;
    })

    
    return total

    
  }
  const getTotalPrice=(name)=>{
    let cartTmp= [...cart];
    let listPizza= cartTmp.filter(pizza=>{
      if(pizza.name===name){
        return pizza
      }
    })

    let total=0;
    listPizza.forEach(elt=>{
      total+=elt.qt;
    })

    
    return total *price

    
  }








  

  let src= '/product/'+img;

  return (
    <div  className="gallerie__product product">
            <div className="product__img">
                <img src={src} alt=" product pizza" className={differentSize(sizeSelected)} / >
                  </div>
                      <h4 className="product__name">{name} </h4>
                      <div className="product__detail">
                        <ul className="product__detail-name">
                          {/* <li className="product__detail-name-item product__detail-name-item--active">тонкое</li> */}
                         {
                           types.map((type,index)=>{
                             return(
                                <li onClick={()=> setTypePizza(type)} key={type+'-'+index} className={type ===typePizza?"product__detail-name-item product__detail-name-item--active":"product__detail-name-item "}>{type}</li>
                             )
                           })
                         }
                        </ul>
                        <ul className="product__detail-size">
                          {/* <li className="product__detail-size-item product__detail-size-item--active">26 см.</li> */}
                          {
                            sizes.map((size,index)=>{
                              return (
                                <li onClick={()=> setSize(size)} key={size+'-'+index}  className={sizeSelected=== size?"product__detail-size-item product__detail-size-item--active":"product__detail-size-item "}>{size}</li>
                              )
                            })
                          }
                        </ul>
                      </div>
                      <div className="product__footer">
                        <div className="product__price">
                          <span className="product__price-ot">от</span>
                          <span className="product__price-number">{getTotalQt(name)<=1?price:getTotalPrice(name)}</span>
                          <span className="product__price-device"> ₽ </span>
                        </div>
                        {
                          getTotalQt(name)>=1?(
                            <button  className="product__btn btn" onClick={()=> addPizza()}>
                              <img src="/img/plus.svg" alt="icon add plus" />
                              <span  className="btn__text">Добавить </span>
                              <span className="btn__qt-product">{getTotalQt(name)}</span>
                            </button>
                          ):(
                            <button  className="product__btn btn btn--orange" onClick={()=> addPizza()}>
                              <img src="/img/plus-white.svg" alt="icon add plus" />
                              <span  className="btn__text btn__text--white">Добавить </span>
                              
                            </button>
                          )
                        }
                        
                      </div>
                     
      </div>
  )
}

export default Product