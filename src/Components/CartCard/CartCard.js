import React from 'react';
import './CartCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faDeleteLeft, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

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
               <span><FontAwesomeIcon icon={faPlus} /></span>
               <span><FontAwesomeIcon icon={faMinus} /></span>
           </div>
        </div>
    );
};

export default CartCard;