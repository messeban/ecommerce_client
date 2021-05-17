import React from 'react';
import './Form.css';
import {Button} from '../../../components/Button/Button';

function Form(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <h1>{props.title}</h1>
            {props.children}
                  
        <Button type='submit' buttonStyle='btn--outline'>{props.title}</Button>
        </form>
    )
}

export default Form
