import React from 'react';
import Submit from '../Submit/Submit';

const Form = (props) => {
    return (
        <form onSubmit={props.changed}>
            <input type="text"></input>
            <br/>
            <Submit name="Submit"></Submit>
        </form>
    )
}

export default Form;