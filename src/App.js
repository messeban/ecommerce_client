import './App.css';
import Container from './components/UI/Container/Container';
import Form from './components/UI/Form/Form';
import InputForm from './components/UI/InputForm/InputForm';

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
  const [test, setTest] = useState('');
  const handleSubmit = (evt)=> {
    evt.preventDefault();
    alert('A name was submitted: ' + test);
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/signup" component={SignUp} />
          <Route exact={true} path="/products" component={Products} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
