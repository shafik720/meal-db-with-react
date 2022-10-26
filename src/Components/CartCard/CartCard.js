import React from 'react';
import './CartCard.css';

const CartCard = (props) => {
    console.log(props.index);
    const{strMeal, quantity, strMealThumb} = props.index;
    return (
        <div className="cardx">
           <div className="card-left"></div>
           <div className="card-right"></div>
        </div>
    );
};

export default CartCard;