import React from 'react';
import CartItem from './CartItem'
//Passing props rel cart.js
export default function CartList({value}) {
   const {cart} = value;
   console.log(value, cart);

    return (
        <div className="container-fluid">
            {cart.map(item => {
              return <CartItem key={item.id} item={item} value={value} />
            })}
            
        </div>
    )
}
// "container-fluid  to use up the whole space"
// for each item in the array, i'm returning a CartItem using props and the value passed
// Forgot to use return in   {cart.map(item => {<CartItem key={item.id} item={item} value={value} />})}
// spent 30 mins looking for the problem