import React from 'react';
import './Meal.css'

const Meal = (props) => {
    console.log(props);
    const{strMealThumb, strMeal, strArea, strCategory} = props.index
    return (
        <div>
            <div className="meal-card">
                <div className="meal-top">
                    <img src={strMealThumb} alt=""  />
                </div>
                <div className="meal-body">
                    <h3>{strMeal}</h3>
                </div>
            </div>
        </div>
    );
};

export default Meal;