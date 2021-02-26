import React, { useState } from 'react'
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
export default function Shop() {
    //console.log(fakeData);
    const first10 = fakeData.slice(0,17);
    //console.log(first10);
    const [ products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct =(product)=>{
        console.log('product added',product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop">
            <div className="shopProduct">
                {
                    products.map(products => 
                    <Product 
                    handleAddProduct = {handleAddProduct}
                    product ={products}
                    
                    /> 
                    )
                }
            </div>
            <div className="shopCart">
                <h1>Cart Items</h1>
                <h4>Items Ordered:{cart.length}</h4>
            </div>
        </div>
    )
}
