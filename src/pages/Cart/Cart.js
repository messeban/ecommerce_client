import React, {useContext} from 'react';
import {CartContext} from './CartContext';
import Container from '../../components/UI/Container/Container';
import customAxios from '../../util/axios';
import { useHistory } from "react-router-dom";

function Cart() {

const [cart, setCart] = useContext(CartContext);
const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);


let history = useHistory();

const handleSubmit = async (evt) => {
    evt.preventDefault();

    const config = { headers: { 'Content-Type': 'application/json' } }


    await customAxios.post("/products/order/add", config)
        .then(function (response) {
            console.log(response.data);
             cart.map(i=>{
             customAxios.post("/products/order/item/add/"+response.data.id, {productId: i.id, price: i.price, quantity:1}, config)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            });
            history.push('/');
        })
        .catch(function (error) {
            console.log(error);
        });
}

console.log(cart);
    return (
        <Container>
            {
                cart.map(item =>(
                    <h1>{item.name}</h1>
                ))
            }
            <h1>{totalPrice}</h1>
            <button onClick={handleSubmit}>submit</button>
            </Container>
    )
}

export default Cart
