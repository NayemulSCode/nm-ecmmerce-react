import React, { useEffect, useState } from 'react'
import './Shop.css';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../../Cart';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager'


 const  Shop = ()=> {
    const [ products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    useEffect(() =>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        if(products.length > 0){
            const previousCart = productKeys.map(  existingKey =>{
                const product = products.find(pd => pd.key === existingKey);
                product.quantity = saveCart[existingKey];
                 
                console.log(productKeys);
                console.log(existingKey, saveCart[existingKey]);
                return product;
            })
            setCart(previousCart);
            console.log(previousCart);
        }
    },[products])
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