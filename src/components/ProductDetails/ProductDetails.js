import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = (props) => {
    const {productKey} = useParams();
    console.log(productKey);
    return (
        <div>
            <h3>{productKey} details  </h3>
        </div>
    );
};
export default ProductDetails;