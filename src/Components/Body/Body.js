import React, { useEffect, useState } from 'react';
import Foods from '../Foods/Foods';

import './Body.css'

const Body = () => {
    // const[foods, setFoods] = useState([]);
    // useEffect(()=>{
    //     fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
    //     .then(res=>res.json())
    //     .then(data=>setFoods(data.meals))
    // },[])    

    // let {food, setFood} = useState({});
    const[food, setFood] = useState([]);

    let x = '';
    function searchFunction(){
        let searchField = document.getElementById('searchText');
        x = searchField.value;    
        setFood(x);
    }
    return (
        <div className="mainDiv">
            <div className="left-div"> 
                <div className="search-div">
                    <input type="text" id="searchText" placeholder="Search Your food Here" />
                    <button onClick={searchFunction}>Search</button>
                </div>    
                <div className="result-div">
                    <Foods food={food}></Foods>
                </div>     
            </div>
            <div className="right-div">
                <h2>Ok</h2>
            </div>
        </div>
    );
};

export default Body;