import React, { useEffect, useState } from 'react';
import Foods from '../Foods/Foods';

import './Body.css'

const Body = () => {  
    
    const[meal, setMeal] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
        .then(res=>res.json())
        .then(data=>setMeal(data));
    },[])
    
    return (
        <div className="mainDiv">
            <div className="left-div"> 
                 
            </div>
            <div className="right-div">
                <h2>Ok</h2>
            </div>
        </div>
    );
};

export default Body;