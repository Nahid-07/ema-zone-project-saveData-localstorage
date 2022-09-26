import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0
    for(const product of cart){
        quantity += product.quantity
        total += product.price * product.quantity
        shipping += product.shipping
    }
    let tax = +((total * 0.1).toFixed(2));
    const grand = total + shipping + tax;
    // console.log(tax)
    return (
        <div className='cart'>
            <h1>this is cart container</h1>
            <h3>Selected Items : {quantity}</h3>
            <h4>Price : ${total}</h4>
            <h4>Shipping : ${shipping} </h4>
            <h4>Tax : ${tax} </h4>
            <h3>Grand total : ${grand}</h3>
        </div>
    );
};

export default Cart;