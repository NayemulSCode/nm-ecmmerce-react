import React, { useState } from 'react'
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../../Cart';
import {addToDatabaseCart} from '../../utilities/databaseManager'


export default function Shop() {
    //console.log(fakeData);
    const first10 = fakeData.slice(0,17);
    //console.log(first10);
    const [ products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct =(product)=>{
        //console.log('product added',product);
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className="shop">
            <div className="shopProduct">
                {
                    products.map(products => 
                    <Product 
                    key={products.key}
                    showAddToCart={true}
                    handleAddProduct = {handleAddProduct}
                    product ={products}
                    
                    /> 
                    )
                }
            </div>
            <div className="shopCart">
                <Cart cart= {cart} />
            </div>
        </div>
    )
}
