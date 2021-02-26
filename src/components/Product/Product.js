import React from 'react';
import './Product.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faShoppingCart } from '@fortawesome/fontawesome-svg-core-svg-icons'
// library.add(faShoppingCart);
//<FontAwesomeIcon icon={faShoppingCart} />
const Product = (props) => {
    const {name,img,seller,stock,price} = props.product;
    return (
        <div className="product">
            <div className="productImg">
                <img src={img} alt=""/>
            </div>
            <div className="productInfo">
                <h4>{name}</h4>
                <p>{seller}</p>
                <p>Only {stock} left stock. order soon</p>
                <p>${price}</p>
                {/* &#x09F3; */}
                <button onClick={() => props.handleAddProduct(props.product)} className="cartButton"> add to cart</button>
            </div>
        </div>
    );
};

export default Product;