import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';

const POST_URL = 'https://192.168.0.106:3001/api/groceries'

const NewItemForm = (props) => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        setShow(props.display);
    }, [props.display]);

    const handleClose = () => {
        setShow(false);
        props.setDisplay( false );
    }

    async function handleSave() {
        await postNewItem( name, quantity );
        props.callReload();
        setShow(false);
        props.setDisplay( false );
    }

    async function postNewItem( name, quantity ) {
        try {
            const data = {
                name,
                quantity
            };
            await fetch( POST_URL, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( data )
            });
        } catch( err ) {
            console.error( err );
        }       
    }

    const handleNameChange = ( event ) => setName( event.target.value );

    const handleQtyChange = ( event ) => setQuantity( event.target.value );

    return (
        <Modal centered show={show}>
            <Modal.Header>
                <Modal.Title>Add new item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormLabel>Name</FormLabel>
                <FormControl onChange={handleNameChange}></FormControl>
                <FormLabel>Quantity</FormLabel>
                <FormControl type="number" onChange={handleQtyChange}></FormControl>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewItemForm;