import React from 'react';
import Submit from '../Submit/Submit';

const Table = (props) => {
    return (
        <tbody>
            <tr>
                <td>{props.name}</td>
                <td>{props.qty}</td>
                <td><Submit clicked={() => props.deleteHandler(props.index)} name="Delete"/></td>
            </tr>
        </tbody>
    )

}

export default Table;