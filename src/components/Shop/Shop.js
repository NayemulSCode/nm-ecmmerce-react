import React, { useEffect, useState } from 'react'
import './Shop.css';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../../Cart';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager'


 const  Shop = ()=> {
    //console.log(fakeData);
    const first10 = fakeData.slice(0,17);
    //console.log(first10);
    const [ products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    ///update cart total

    useEffect(() =>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const previousCart = productKeys.map(  existingKey =>{
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = saveCart[existingKey];
             
            console.log(productKeys);
            console.log(existingKey, saveCart[existingKey]);
            return product;
        })
        setCart(previousCart);
        console.log(previousCart);

    },[])
    const handleAddProduct =(product)=>{
        //console.log('product added to cart',product);
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter( pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct]
        }
        else{
            product.quantity =1;
            newCart = [...cart, product]
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className="shop">
            <div className="shopProduct">
                {
                    products.map(product => 
                    <Product 
                    key={product.key}
                    showAddToCart={true}
                    handleAddProduct = {handleAddProduct}
                    product = {product}
                    
                    /> 
                    )
                }
            </div>
            <div className="shopCart">
                <Cart cart= {cart} >
                    <Link to={"/order"}>
                        <button  className="cartButton">ShowCart</button>
                    </Link>
                </Cart>
            </div>
        </div>
    )
}
export default Shop;