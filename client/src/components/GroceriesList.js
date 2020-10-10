import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import GroceryItem from './GroceryItem';
import NewItemForm from './NewItemForm';

const GET_URL = 'http://localhost:3000/api/groceries'

const GroceriesList = () => {
    const [groceries, setGroceries] = useState([]);
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        fetch(GET_URL, {
            method: 'GET'
        }).then( 
            res => res.json() 
        ).then(
            (result) => {
                setGroceries(result.groceries);
            },
            (error) => {
                console.error( error );
            }
        )
    }, []);

    const handleAddItem = () => setDisplay( true );

    return (
        <div>
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
            <NewItemForm display={display} setDisplay={setDisplay}/>
        </div>
    )
}

export default GroceriesList;