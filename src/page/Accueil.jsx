import React,{useContext}from 'react'

import '../style/accueil.css'
import Header from '../component/Header';
import Filtre from '../component/Filtre';
import ListProductItem from '../component/ListProductItem';
import StateContext from '../context/ProductContext';





function Accueil() {

  let {categorie,cart}= useContext(StateContext)
  
  return (
    <>
        <Header/>
        <Filtre/>
         <section className="gallerie">
            <div className="gallerie__container _container">
            <h2 className="gallerie__title ">{categorie} пиццы</h2>
                 <ListProductItem/>
            </div>
        </section>
        
       

       
        
    </>
  )
}

export default Accueil