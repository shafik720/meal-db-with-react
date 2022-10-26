import React, { useEffect, useState } from 'react';
import Cart from '../Header/Cart/Cart';
import Meal from '../Meal/Meal';
import { addToDb, getMealCart } from '../Utilities/storage';

import './Body.css'

const Body = () => {  
    
    const[meal, setMeal] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res=>res.json())
        .then(data=>setMeal(data.meals));
    },[]);

    useEffect(()=>{
        let storedCart = getMealCart();
        for(let id in storedCart){
            let addedMeal = meal.find(meals=> meals.idMeal === id);
            console.log(addedMeal);
        }
        
    },[meal])

    const [cart, setCart] = useState([]);
    function handleOrder(element){
        let newCart = [...cart, element];
        setCart(newCart);
        addToDb(element.idMeal);
    }
    
    return (
        <div className="mainDiv">
            <div className="left-div"> 
                 {
                     meal.map(index=><Meal 
                        index={index}
                        key = {index.idMeal}
                        handleOrder = {handleOrder}
                        ></Meal>)
                 }
            </div>
            <div className="right-div">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Body;