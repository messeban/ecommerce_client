import React, { useState } from 'react';
import Container from '../../components/UI/Container/Container'
import Form from '../../components/UI/Form/Form';
import InputForm from '../../components/UI/InputForm/InputForm';
import customAxios from '../../util/axios';

import { useHistory } from "react-router-dom";
function AddProduct() {
    const [brand, setBrand] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(null);
    let history = useHistory();

    const handleSubmit = (evt) => {
      evt.preventDefault();
      customAxios.post("/products/add", {brand, name, description, price })
        .then(function (response) {
            
            history.push('/products/add/tags/'+response.data.id);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return (
        <Container>
            <Form title="Add Product" onSubmit={handleSubmit}>
                <InputForm type='text' name='brand' nameText='Brand:' value={brand} setInput={setBrand} />
                <InputForm type='text' name='name' nameText='Product:' value={name} setInput={setName} />
                <InputForm type='text' name='description' nameText='Description:' value={description} setInput={setDescription} />
                <InputForm type='number' step="0.01" name='price' nameText='Price:' value={price} setInput={setPrice} />
            </Form>
        </Container>
    )
}

export default AddProduct
