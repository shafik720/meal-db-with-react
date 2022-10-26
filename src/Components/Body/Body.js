import React, { useEffect, useState } from 'react';
import Cart from '../Header/Cart/Cart';
import Meal from '../Meal/Meal';
import { addToDb, decreaseDb, getMealCart } from '../Utilities/storage';

import './Body.css'

const Body = () => {  
    
    const[meal, setMeal] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res=>res.json())
        .then(data=>setMeal(data.meals));
    },[]);

    
    // setting value to local storage
    const [cart, setCart] = useState([]);
    function handleOrder(element){
        let newCart = [...cart, element];
        setCart(newCart);
        addToDb(element.idMeal);
    }

    // decreasing value 
    let [decrease, setDecrease] = useState([]);
    function decreaseValue(element){
        // console.log(element)
        let newCart = [...decrease,element];
        decreaseDb(element.idMeal);
        setDecrease(newCart);
    }

    // getting value & showing value from local storage 
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
    },[meal, cart, decrease]);
    
    
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
                decreaseValue = {decreaseValue}
                ></Cart>
            </div>
        </div>
    );
};

export default Body;