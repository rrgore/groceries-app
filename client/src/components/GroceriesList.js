import React, { useEffect, useState } from 'react';

const GET_URL = 'http://localhost:3000/v1/allGroceries'

const GroceriesList = () => {
    const [groceries, setGroceries] = useState([]);

    useEffect(() => {
        fetch(GET_URL, {
            method: 'GET'
        }).then( res => res.json() )
            .then(
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
            <ul>
            {
                groceries && groceries.map(item => (
                    <li key={item.id}>
                        Name: {item.name} Quantity: {item.quantity}
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default GroceriesList;