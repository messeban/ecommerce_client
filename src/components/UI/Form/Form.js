import React from 'react';
import './Form.css';
function Form(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <h1>{props.title}</h1>
            {props.children}
            <input type="submit" value={props.title} />
        </form>
    )
}

export default Form
