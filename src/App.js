import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Error from './components/Error/Error';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
   
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <p>email:{loggedInUser.email}</p>
      <Header />
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/order">
            <Review />
          </Route>
          <Route path="/manage">
            <Inventory></Inventory>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/shipment">
           <Shipment />
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        </Router>
        </UserContext.Provider>
    
  );
}

export default App;
