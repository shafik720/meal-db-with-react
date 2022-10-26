import React from 'react' ;
import './Cart.css' ;

const Cart = (props) => {
    console.log(props.foods);
    let quantity = 0;
    for(let element of props.foods){
        quantity += element.quantity;
    }
    return (
        <div>
            <h2>Total Food added : {quantity} </h2>
            <div className="cart-card"></div>
        </div>
    );
};

export default Cart;