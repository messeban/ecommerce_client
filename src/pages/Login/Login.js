import React, { useState } from 'react';
import Container from '../../components/UI/Container/Container'
import Form from '../../components/UI/Form/Form';
import InputForm from '../../components/UI/InputForm/InputForm';

import customAxios from '../../util/axios';
import { useHistory } from "react-router-dom";

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const user = { "username": username, "password": password };

        const config = { headers: { 'Content-Type': 'application/json' } }


        await customAxios.post("/users/login", user, config)
            .then(function (response) {
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem('refreshToken', response.data.refreshToken);
                localStorage.setItem('LoggedIn', true);
                localStorage.setItem('role', response.data.role);
                history.push('/');
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <Container>
            <Form title="Login" onSubmit={handleSubmit}>
                <InputForm type='text' name='username' nameText='User Name:' value={username} setInput={setUsername} />
                <InputForm type='password' name='password' nameText='Password:' value={password} setInput={setPassword} />
            </Form>
        </Container>
    )
}

export default Login
