import React, { useEffect, useState } from 'react';
import './Body.css'

const Body = () => {
    const[foods, setFoods] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res=>res.json())
        .then(data=>setFoods(data.meals))
    },[])

    return (
        <div>
            <h2>Total Food Found : {foods.length} </h2>
        </div>
    );
};

export default Body;