import React, { useState } from 'react';
import Container from '../../components/UI/Container/Container'
import Form from '../../components/UI/Form/Form';
import InputForm from '../../components/UI/InputForm/InputForm';
function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
            <Form title="Login">
                <InputForm type='text' name='username' nameText='User Name:' value={username} setInput={setUsername} />
                <InputForm type='password' name='password' nameText='Password:' value={password} setInput={setPassword} />
            </Form>
        </Container>
    )
}

export default Login
