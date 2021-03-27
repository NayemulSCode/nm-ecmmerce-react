import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {
    const handleAddProduct =() =>{
        fetch('http://localhost:5000/addProduct',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(fakeData)
        })
        .then(data =>{
            console.log(data);
        })
    }
    return (
        <div>
            <h3>Create Product</h3>
            <form action="">
                <p><span>Name</span><input type="text"/></p>
                <p><span>Price</span><input type="text"/></p>
                <p><span>Upload Picture</span><input type="file"/></p>
                <button onClick={handleAddProduct}>Add Product</button>
            </form>
        </div>
    );
};

export default Inventory;