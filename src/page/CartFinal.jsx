import React,{useContext}from 'react';




import Header from '../component/Header';
import Filtre from '../component/Filtre';
import ListProductItem from '../component/ListProductItem';
import StateContext from '../context/ProductContext';
import CartGlobal from '../component/CartGlobal';

const Cartfinal = () => {
    let {categorie}= useContext(StateContext)
    return (
        <>
        <Header/>

         <section className="gallerie">
            <div className="gallerie__container _container">

                 <CartGlobal/>
            </div>
        </section>

       
        
    </>
    );
}

export default Cartfinal;
