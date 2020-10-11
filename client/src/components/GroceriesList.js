import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import GroceryItem from './GroceryItem';
import NewItemForm from './NewItemForm';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const GET_URL = 'https://192.168.0.106:3001/api/groceries'

const GroceriesList = () => {
    const [groceries, setGroceries] = useState([]);
    const [display, setDisplay] = useState(false);

    useEffect( () => {
        async function fetchData() {
            try {
                const result = await getGroceries();
                setGroceries( result.groceries );
            } catch( err ) {
                console.error( err );
            }
        }
        fetchData();
    }, []);

    async function getGroceries() {
        const result = await fetch( GET_URL );
        return result.json();
    }

    const handleAddItem = () => setDisplay( true );

    const callReload = () => {
        window.location.reload();
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Table bordered size="sm">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                groceries && groceries.map(item => (
                                    <GroceryItem key={item.id} item={item} />
                                ))
                            }
                        </tbody>            
                    </Table>
                    <Button variant="primary" block onClick={handleAddItem}>Add new item</Button>
                    <NewItemForm display={display} setDisplay={setDisplay} callReload={callReload}/>
                </Col>
            </Row>
        </Container>
    )
}

export default GroceriesList;