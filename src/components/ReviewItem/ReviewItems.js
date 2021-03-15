import React from 'react';
import './Review.css'
const ReviewItems = (props) => {
    console.log(props);
    //const {name} = props.product?;
    const  key  = props.product?.key;
    console.log(key);
    return (
        <div className="cart-item">
            <h4>{props.product?.name}</h4>
            <img src={props.product?.img} alt=""/>
            <p>Quantity: {props.product?.quantity}</p>
            <p>$<small>{props.product?.price}</small></p>
            <button onClick={() => props.removeProduct(key)}  className="cartButton">Remove</button>
        </div>
    );
};

export default ReviewItems;