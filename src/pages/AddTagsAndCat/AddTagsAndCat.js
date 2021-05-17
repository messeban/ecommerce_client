import React, { useState } from 'react';
import Container from '../../components/UI/Container/Container'
import Form from '../../components/UI/Form/Form';
import InputForm from '../../components/UI/InputForm/InputForm';
import customAxios from '../../util/axios';

import { useHistory,useParams } from "react-router-dom";


function AddTagsAndCat() {

    const [tag, setTag] = useState('');
    const [category, setCategory] = useState('');

    let history = useHistory();
    const {id} = useParams();

    const handleSubmitTag = (evt) => {
      evt.preventDefault();
      customAxios.post("/products/tag/add", { productId:id , tag})
        .then(function (response) {
            setTag('');
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    const handleSubmitCat = (evt) => {
        evt.preventDefault();
        customAxios.post("/products/category/add", { productId:id , category})
          .then(function (response) {
            setCategory('');
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    return (
        <Container>
            <Form title="Add Tag" onSubmit={handleSubmitTag}>
                <InputForm type='text' name='tag' nameText='Tag:' value={tag} setInput={setTag} />
            </Form>

            <Form title="Add Category" onSubmit={handleSubmitCat}>
                <InputForm type='text' name='category' nameText='Category:' value={category} setInput={setCategory} />
            </Form>
        </Container>
    )
}

export default AddTagsAndCat