import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Cart from '../../Cart';
import fakeData from '../../fakeData';
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
        //console.log(productKeys);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];

            return product;
        });
        setCart(cartProducts);
        console.log(cartProducts);
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