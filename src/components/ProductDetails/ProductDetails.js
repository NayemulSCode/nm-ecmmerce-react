import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey} = useParams();
    const [product, setProduct] = useState({});
    useEffect(()=>{
        fetch('http://localhost:5000/product/'+productKey)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[productKey]);
    //const product = fakeData.find(pd => pd.key === productKey);
    console.log(product);
    return (
        <div>
            <h3>product details</h3>
            <Product showAddToCart={false} product={product} />
        </div>
    );
};
export default ProductDetails;