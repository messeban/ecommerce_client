import React, { useState } from 'react';
import Container from '../../components/UI/Container/Container'
import Form from '../../components/UI/Form/Form';
import InputForm from '../../components/UI/InputForm/InputForm';
import customAxios from '../../util/axios';

import { useHistory } from "react-router-dom";


function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    const handleSubmit = (evt) => {
      evt.preventDefault();
      customAxios.post("/users/create", { email, username, password })
        .then(function (response) {
            history.push('/');
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return (
        <Container>
            <Form title="Sign Up" onSubmit={handleSubmit}>
                <InputForm type='email' name='email' nameText='E-mail:' value={email} setInput={setEmail} />
                <InputForm type='text' name='username' nameText='User Name:' value={username} setInput={setUsername} />
                <InputForm type='password' name='password' nameText='Password:' value={password} setInput={setPassword} />
            </Form>
        </Container>
    )
}

export default SignUp