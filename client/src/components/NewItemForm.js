import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const NewItemForm = (props) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(props.display);
    }, [props.display]);

    const handleClose = () => {
        setShow(false);
        props.setDisplay( false );
    }

    return (
        <Modal centered show={show}>
            <Modal.Header>
                <Modal.Title>Add new item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Test</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewItemForm;