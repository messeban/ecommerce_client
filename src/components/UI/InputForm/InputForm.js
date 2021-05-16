import React from 'react'
import './InputForm.css';
function InputForm(props) {
    return (
    <>
        <label>{props.nameText}</label>
        <input type={props.type} name={props.name} value={props.value} onChange={e => props.setInput(e.target.value)}/>

    </>
    )
}

export default InputForm
