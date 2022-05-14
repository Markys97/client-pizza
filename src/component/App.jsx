import React,{useState}from 'react';
import {Routes,Route} from 'react-router-dom';

import '../style/main.css'
import Accueil from '../page/Accueil';
import StateContext from '../context/ProductContext';
import Cartfinal from '../page/CartFinal';


function App() {
  const [product,getProduct]=useState([]);
  const[categorie, setCategorie]=useState('все');
  const [filtre,setFiltre]=useState('популярности')
  const [cart, addProductInCart]=useState([]);
  const [cartTmp, setCartTmp]=useState([]);

  const contextValue={
    product,
    getProduct,
    categorie,
    setCategorie,
    filtre,
    setFiltre,
    cart,
    addProductInCart,
  }
  return (
    <div className='main'>
      <StateContext.Provider value={contextValue}>
          <Routes>
              <Route path='/' exact element={<Accueil/>} />
              <Route path='/cart' exact element={<Cartfinal/>} />
          </Routes>
      </StateContext.Provider>

    </div>
  )
}

export default App