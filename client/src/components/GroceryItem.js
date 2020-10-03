import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const GroceryItem = (props) => {
    const [editable, setEditable] = useState( false );

    const onEditClick = () => {
        setEditable( true );
    }

    const onSaveClick = () => {
        setEditable( false );
    }

    return (        
        <tr>
            <td>{props.item.name}</td>
            <td>
                <FormControl type="number" readOnly={!editable} value={props.item.quantity}></FormControl>
            </td>
            <td>
                <Button variant="primary" size="sm" disabled={editable} onClick={onEditClick}>Edit</Button>
                <Button variant="primary" size="sm" disabled={!editable} onClick={onSaveClick}>Save</Button>
            </td>
        </tr>          
    );
}

export default GroceryItem;