import './App.css';
import Home from './pages/Home/Home';
import AddProduct from './pages/AddProduct/AddProduct';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Products from './pages/Products/Products';
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import {useState} from 'react';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/signup" component={SignUp} />
          <Route exact={true} path="/products" component={Products} />
          <Route exact={true} path="/add_product" component={AddProduct} />
          <Route exact={true} path="/add_tags_cats" component={AddProduct} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
