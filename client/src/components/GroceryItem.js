import React from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const GroceryItem = (props) => {
    return (
        <div>
            <tr key={props.item.id}>
                <td>{props.item.name}</td>
                <td>
                    <FormControl type="number" readOnly value={props.item.quantity}></FormControl>
                </td>
                <td>
                    <Button variant="primary" size="sm">Edit</Button>
                    <Button variant="primary" size="sm" disabled>Save</Button>
                </td>
            </tr>          
        </div>
    );
}

export default GroceryItem;