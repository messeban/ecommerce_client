import React, { useState } from 'react';
import Container from '../../components/UI/Container/Container'
import Form from '../../components/UI/Form/Form';
import InputForm from '../../components/UI/InputForm/InputForm';


function AddTagsAndCat() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(null);
    return (
        <Container>
            <Form title="Add Product">
                <InputForm type='text' name='name' nameText='Product:' value={name} setInput={setName} />
                <InputForm type='text' name='description' nameText='Description:' value={description} setInput={setDescription} />
                <InputForm type='number' name='price' nameText='Price:' value={price} setInput={setPrice} />
            </Form>

            <Form title="Add Product">
                <InputForm type='text' name='name' nameText='Product:' value={name} setInput={setName} />
                <InputForm type='text' name='description' nameText='Description:' value={description} setInput={setDescription} />
                <InputForm type='number' name='price' nameText='Price:' value={price} setInput={setPrice} />
            </Form>
        </Container>
    )
}

export default AddTagsAndCat