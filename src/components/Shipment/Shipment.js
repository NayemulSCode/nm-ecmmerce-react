import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import Payment from '../Payment/Payment';
import './Shipment.css'

const Shipment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const [shippingData, setShippingData] = useState(null);
  const onSubmit = data => {
    setShippingData(data);
  }
  const handlePaymentOrder = paymentId =>{
    const saveCart = getDatabaseCart();
    const orderDetails = {
      ...loggedInUser, 
      products: saveCart, 
      shipment: shippingData, 
      paymentId,
      orderTime: new Date()
    };
    fetch('http://localhost:5000/addOrder',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
    .then(res => res.json())
    .then(data => {
      if(data){
        processOrder();
        alert('order added successfully');
      }
    })
  }
  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div >
      <div style={{display: shippingData ? 'none': 'block'}}>
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
          <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name"/>
          {errors.name && <span className="error">Name is required</span>}

          <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email Address"/>
          {errors.email && <span className="error">Email is required</span>}

          <input name="address" ref={register({ required: true })} placeholder="Address"/>
          {errors.address && <span className="error">Address is required</span>}
          
          <input name="phone" ref={register({ required: true })} placeholder="Phone Number"/>
          {errors.phone && <span className="error">Phone number is required</span>}
          <input type="submit" />
        </form>
      </div>
      <div style={{display: shippingData ? 'block': 'none'}}>
        <h2>Payemnt option</h2>
        <Payment handlePayment = {handlePaymentOrder} />
      </div>
    </div>
  );
};

export default Shipment;