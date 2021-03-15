import React from 'react'
import './Cart.css'
function Cart(props) {
    const cart = props.cart;
    //console.log(cart);
    
    //method 1 find total price using reducer
    //const total = cart.reduce((total, product) => total + product.price, 0)
    //method 2 find total price using for loop
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product?.price * product.quantity;
        
    }
    let shipping = 0;
    if(total >50){
        shipping = 4.50;
    }
    else if(total >100){
        shipping = 10.00;
    }
    const tax = total/10;
    const  twoDecimalPlace = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h3>Ordered Summary</h3>
            <h4>Items Ordered: {cart.length}</h4>
            <p><small>Shipping Cost :</small>{twoDecimalPlace(shipping)}</p>
            <p><small>Tax + vat :</small>{twoDecimalPlace(tax)}</p>
            <p>Total Price: {twoDecimalPlace(total + shipping)}</p>
            {
                props.children
            }
        </div>
    )
}

export default Cart
