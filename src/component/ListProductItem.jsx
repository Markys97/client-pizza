import React,{useState,useEffect,useContext} from 'react'
import '../style/listProductItem.css';
import Product from './Product';
import axios from 'axios';
import StateContext from '../context/ProductContext';


function ListProductItem() {
 
   const {product,getProduct,filtre,setFiltre,categorie,setCategorie}= useContext(StateContext)

    useEffect(()=>{
        fetch('http://localhost:1200/getProduct')
        .then(data=>data.json())
        .then(response=> getProduct(response))
        
    },[]);
    
    useEffect(()=>{
        fetch('http://localhost:1200/getProductBy/'+filtre)
        .then(data=>data.json())
        .then(response=> getProduct(response))
        
    },[filtre])

    
    const getProductByCategorie=( products)=>{
      let newProduct= products.filter((item,index,array)=>{
        if(categorie === 'все'){
          return array
        }else if(item.categorie === categorie){
          return item
        }
      })

      return newProduct
    }

    let productToDispay=getProductByCategorie(product)

     
    
    
    
  return (
    <div className="gallerie__list-products">
       {
           productToDispay.map(productItem=> <Product 
            name={productItem.name} 
            key={productItem.id}
            img={productItem.img}
            price={productItem.price}
            categorie={productItem.categorie}
            id={productItem.id}
            />)
       }
    </div>
  )
}

export default ListProductItem