import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <div className="InputClass">
            <input type="text"></input>
            <button onClick={props.changed}>Submit</button>
        </div>
    );
}

export default Input;