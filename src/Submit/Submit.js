import React from 'react'

const Submit = (props) => {
    return (
        <button onClick={props.clicked}>{props.name}</button>
    )
}

export default Submit;