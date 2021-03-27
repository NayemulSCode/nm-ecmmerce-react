import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Cart from '../../Cart';
import {getDatabaseCart, removeFromDatabaseCart, processOrder} from '../../utilities/databaseManager'
import ReviewItems from '../ReviewItem/ReviewItems';
const Review = () => {
    const [cart, setCart] =useState([]);
    const history = useHistory();
    const handlePlaceOrder =() =>{
        history.push('/shipment');
    }
    const removeProduct = productKey =>{
        console.log("remove product", productKey);
        const newCart = cart.filter(pd => pd?.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        fetch('http://localhost:5000/productByKey',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
        .then( res => res.json())
        .then(data => setCart(data))
    },[]);
    return (
        <div className="shop">
            <div className="shopProduct">
                <h3>this is review components: {cart.length}</h3>
                {
                    cart.map(pd => <ReviewItems 
                        key={pd?.key}
                        removeProduct ={removeProduct}
                        product={pd}></ReviewItems> )
                }
            </div>
            <div  className="shopCart">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="cartButton">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;