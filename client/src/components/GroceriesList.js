import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import GroceryItem from './GroceryItem';

const GET_URL = 'http://localhost:3000/api/groceries'

const GroceriesList = () => {
    const [groceries, setGroceries] = useState([]);

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
            <Button variant="primary" block>Add new item</Button>
        </div>
    )
}

export default GroceriesList;