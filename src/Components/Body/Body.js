import React, { useEffect, useState } from 'react';
import Foods from '../Foods/Foods';
import Meal from '../Meal/Meal';

import './Body.css'

const Body = () => {  
    
    const[meal, setMeal] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res=>res.json())
        .then(data=>setMeal(data.meals));
    },[]);

    function handleOrder(element){
        console.log('ok');
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
                <h2>Ok</h2>
            </div>
        </div>
    );
};

export default Body;