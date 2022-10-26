import React from 'react' ;
import './Cart.css' ;

const Cart = (props) => {
    console.log(props.foods);
    return (
        <div>
            <h2>Total Food added : {props.foods.length} </h2>
        </div>
    );
};

export default Cart;