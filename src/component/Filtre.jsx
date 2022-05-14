import React, {useState,useEffect,useContext} from 'react'
import '../style/filtre.css'

import StateContext from '../context/ProductContext';

function Filtre() {
    const {filtre,setFiltre,categorie,setCategorie}=useContext(StateContext);
    const [filtreVisible, setFilterVisible]=useState(false)
    const categorieList=['все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']
    const filterBy=['популярности','по цене','по алфавиту']
    
    
    const handleVisibilityFilter=()=>{
        if(filtreVisible){
            setFilterVisible(false)
        }else{
            setFilterVisible(true)
        }
    }

    const handleFilterData=(value)=>{
        setFiltre(value)
        setFilterVisible(false)
    }
    

    
  return (
    <div className='filtre'>
        <div className="filtre__container _container">
            <div className="filtre__categorie">
                <ul className="filtre__list">
                    {/* <li className="filtre__item-categorie filtre__item-categorie--active">Все</li> */}
                    {
                        categorieList.map((catItem,index)=> {
                            return <li onClick={()=> setCategorie(catItem)} key={index +'-'+catItem} className={catItem=== categorie? "filtre__item-categorie filtre__item-categorie--active":"filtre__item-categorie "} >{catItem}</li> 
                        })
                    }
                </ul>
            </div>
            <div className="filtre__trie">
                <div className="filtre__trie-body">
                    <div className="filtre__trie-icon">
                        <img src="/img/top.svg" alt="icon top" />
                    </div>
                    <p className="filtre__trie-title" onClick={()=>handleVisibilityFilter()}>Сортировка по:</p>
                    <p className="filtre__trie-selected">{filtre}</p>
                </div>
               {
                   filtreVisible && (
                    <ul className="filtre__trie-list">
                        {
                            filterBy.map((filterItem,index)=> {
                                return <li onClick={()=>handleFilterData(filterItem)} key={index+'-'+filterItem} className={filterItem === filtre?"filtre__trie-item filtre__trie-item-selected":"filtre__trie-item "}>{filterItem}</li>
                            })
                        }
                 </ul>
                   )
               }
            </div>
        </div>
    </div>
  )
}

export default Filtre