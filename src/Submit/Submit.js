import React from 'react'

const Submit = (props) => {
    return (
        <button onClick={props.clicked} className="Submit">{props.name}</button>
    )
}

export default Submit;