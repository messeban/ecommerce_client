import './App.css';
import Home from './pages/Home/Home';
import AddProduct from './pages/AddProduct/AddProduct';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Products from './pages/Products/Products';
import Navbar from "./components/Navbar/Navbar";
import AddTagsAndCat from './pages/AddTagsAndCat/AddTagsAndCat';
import Cart from './pages/Cart/Cart';
import { CartProvider } from './pages/Cart/CartContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { useState } from 'react';
function App() {
  localStorage.setItem("cart",[]);
  return (
    <div className="App">
          <CartProvider>

        <Router>
          <Navbar />
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/cart" component={Cart} />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/signup" component={SignUp} />
            <Route exact={true} path="/products" component={Products} />
            <Route exact={true} path="/products/add" component={AddProduct} />
            <Route path="/products/add/tags/:id" component={AddTagsAndCat} />
          </Switch>

        </Router>
        </CartProvider>

    </div>

  );
}

export default App;
