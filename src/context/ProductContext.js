import React from 'react';

const StateContext= React.createContext({
    productData:[],
    setProductData:()=>{},
    categorie:'',
    setCategorie:()=>{},
    filtre:'',
    setFiltre:()=>{}
})



export  default StateContext;