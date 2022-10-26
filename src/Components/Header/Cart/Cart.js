import React from 'react' ;
import CartCard from '../../CartCard/CartCard';
import './Cart.css' ;

const Cart = (props) => {
    let box = props.foods;
    let quantity = 0;
    for(let element of props.foods){
        quantity += element.quantity;
    }
    return (
        <div>
            <h2 className="food-counted">Total Food added : {quantity} </h2>
            <div className="cart-card">
                {
                    box.map(index=><CartCard
                        index = {index}
                        key = {index.idMeal}
                    ></CartCard>)
                }
            </div>
        </div>
    );
};

export default Cart;