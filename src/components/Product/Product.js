import React, { useContext } from 'react';
import { CartContext } from '../../pages/Cart/CartContext';
import './Product.css';
import {Button} from '../Button/Button';
function Product(props) {
    const [cart, setCart] = useContext(CartContext);
    const addToCart = () => {
        const product = {id:props.id, brand: props.brand, name: props.name, price: props.price };
        setCart(currentState => [...currentState, product]);
        console.log(cart);
      }
    return (
        <div className='product'>
            <img src="/images/samsung.png" alt="cc" width="90%" height="50%"/>
            <h1>{props.brand} {props.name}</h1>
            <p>{props.description}</p>
            <h3>€ {props.price}</h3>
            <Button onClick={addToCart}>Add To Cart</Button>
        </div>
    )
}

export default Product
