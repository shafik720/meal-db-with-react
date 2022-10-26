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

    

    const [cart, setCart] = useState([]);
    function handleOrder(element){
        let newCart = [...cart, element];
        setCart(newCart);
        addToDb(element.idMeal);
    }

    const [foods, setFoods] = useState([]);
    useEffect(()=>{
        let storedCart = getMealCart();
        let freshCart = [];
        for(let id in storedCart){
            let addedMeal = meal.find(meals=> meals.idMeal === id);
            if(addedMeal){
                let quantity = storedCart[id];
                addedMeal.quantity = quantity;
                freshCart.push(addedMeal);
            }            
        }
        setFoods(freshCart);
    },[meal, cart]);
    
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
                <Cart 
                cart={cart}
                foods = {foods}
                ></Cart>
            </div>
        </div>
    );
};

export default Body;