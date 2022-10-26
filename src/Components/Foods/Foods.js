import React from 'react';
import './Foods.css'

const Foods = (props) => {
    let {food} = props;
    
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    return (
        <div>
            <h2>Hello Boy</h2>
        </div>
    );
};

export default Foods;