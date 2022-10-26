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
                   <p className="meal-name">{strMeal}</p>
                   <p>Quantity : <span className="quantity">{quantity}</span> </p>
               </div>
           </div>
           <div className="card-right">
               <p>Ok</p>
           </div>
        </div>
    );
};

export default CartCard;