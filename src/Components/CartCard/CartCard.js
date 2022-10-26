import React from 'react';
import './CartCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faDeleteLeft, faPlus, faMinus, mealid } from '@fortawesome/free-solid-svg-icons'

const CartCard = (props) => {
    const{strMeal, quantity, strMealThumb} = props.index;
    // console.log(props.decrease);
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
               <span draggable><FontAwesomeIcon icon={faPlus} /></span>
               <span draggable onClick={()=>props.decrease(props.index)}><FontAwesomeIcon icon={faMinus} /></span>
           </div>
        </div>
    );
};

export default CartCard;