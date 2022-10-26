import React from 'react';
import './CartCard.css';

const CartCard = (props) => {
    console.log(props.index);
    const{strMeal, quantity, strMealThumb} = props.index;
    return (
        <div className="cardx">
           <div className="card-left">
               <div className="left-img">
                   <img src={strMealThumb} alt=""/>
               </div>
               <div className="left-details">
                   <p>{strMeal}</p>
                   <p>Quantity : {quantity}</p>
               </div>
           </div>
           <div className="card-right"></div>
        </div>
    );
};

export default CartCard;