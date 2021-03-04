import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
const Product = (props) => {
    const {name,img,seller,stock,price,key} = props.product;
    return (
        <div className="product">
            <div className="productImg">
                <img src={img} alt=""/>
            </div>
            <div className="productInfo">
                <h4><Link to={"/product/"+key}>{name}</Link></h4>
                <p>{seller}</p>
                <p>Only {stock} left stock. order soon</p>
                <p>${price}</p>
                {/* &#x09F3; */}
                {
                    props.showAddToCart && <button onClick={() => props.handleAddProduct(props.product)} className="cartButton"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                }
            </div>
        </div>
    );
};


export default Product;