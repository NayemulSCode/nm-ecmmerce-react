import React from 'react';
import './Review.css'
const ReviewItems = (props) => {
    console.log(props);
    //const {name} = props.product?;
    return (
        <div className="cart-item">
            <h4>{props.product?.name}</h4>
            <img src={props.product?.img} alt=""/>
            <button  className="cartButton">Remove</button>
        </div>
    );
};

export default ReviewItems;