import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const PATCH_URL = 'http://localhost:3000/api/groceries';

const GroceryItem = (props) => {
    const [editable, setEditable] = useState( false );
    const [quantity, setQuantity] = useState( 0 );

    useEffect(() => {
        setQuantity( props.item.quantity );
    }, [props.item.quantity]);

    const handleInputChange = ( event ) => {
        setQuantity( event.target.value )
    }

    const handleEditClick = () => {
        setEditable( true );
    }

    async function handleSaveClick() {
        setEditable( false );
        await patchQuantityData(props.item.id, quantity);  
    }

    async function patchQuantityData( id, qty ) {
        try {
            const url = `${PATCH_URL}/${id}`;
            const data = {
                quantity: qty
            };
            await fetch( url, {
                method: 'PATCH',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( data )
            } );
        } catch( err ) {
            console.error( err );
        }
    }

    return (        
        <tr>
            <td>{props.item.name}</td>
            <td>
                <FormControl size="sm" type="number" readOnly={!editable} value={quantity} onChange={handleInputChange}></FormControl>
            </td>
            <td>
                <Button variant="primary" size="sm" disabled={editable} onClick={handleEditClick}>Edit</Button>
                <Button variant="primary" size="sm" disabled={!editable} onClick={handleSaveClick}>Save</Button>
            </td>
        </tr>          
    );
}

export default GroceryItem;