import React from 'react' ;
import CartCard from '../../CartCard/CartCard';
import './Cart.css' ;

const Cart = (props) => {
    let decrease = props.decreaseValue;
    let handleOrder = props.handleOrder;
    let box = props.foods;
    let quantity = 0;
    for(let element of props.foods){
        quantity += element.quantity;
    }
    return (
        <div className='cart'>
            <h2 className="food-counted">Total Food added : {quantity} </h2>
            <div className="cart-card">
                {
                    box.map(index=><CartCard
                        index = {index}
                        key = {index.idMeal}
                        decrease = {decrease}
                        handleOrder = {handleOrder}
                    ></CartCard>)
                }
            </div>
        </div>
    );
};

export default Cart;