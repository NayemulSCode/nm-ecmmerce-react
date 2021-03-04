import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import {getDatabaseCart} from '../../utilities/databaseManager'
import ReviewItems from '../ReviewItem/ReviewItems';
const Review = () => {
    const [cart, setCart] =useState([]);

    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        //console.log(productKeys);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            //product.quantity = saveCart[key];

            return product;
        });
        setCart(cartProducts);
        console.log(cartProducts);
    },[]);
    return (
        <div>
            <h3>this is review components: {cart.length}</h3>
            {
                cart.map(pd => <ReviewItems product={pd}></ReviewItems> )
            }
        </div>
    );
};

export default Review;