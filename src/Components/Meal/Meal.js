import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const{strMealThumb, strMeal, strArea, strCategory} = props.index
    return (
        <div>
            <div className="meal-card">
                <div className="meal-top">
                    <img src={strMealThumb} alt=""  />
                </div>
                <div className="meal-body">
                    <div className="">
                        <h3>{strMeal}</h3>
                        <button onClick={()=>props.handleOrder(props.index)}>Order</button>
                    </div>
                    <div className="">
                        <p>{strArea}</p>
                        <p>{strCategory}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meal;