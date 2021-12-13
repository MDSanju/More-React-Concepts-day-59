import React from 'react';
import { addToDatabase, removeFromDatabase } from '../../utilities/localstorageadd';

const Car = (props) => {
    const {name, price, id} = props.car;
    const handlePurches = id => {
        addToDatabase(id);
    }
    const handleRemove = id => {
        removeFromDatabase(id);
    }
    return (
        <div style={{marginBottom: '50px'}}>
            <h3>Car name: {name}</h3>
            <p>Price: ${price}</p>
            <button style={{border: 'none', backgroundColor: 'midnightblue', color: 'white', padding: '7px 15px', fontWeight: '600', cursor: 'pointer', marginRight: '5px'}} onClick={() => handlePurches(id)}>Purches</button>
            <button style={{border: 'none', backgroundColor: 'orangered', color: 'white', padding: '7px 15px', fontWeight: '600', cursor: 'pointer', marginLeft: '5px'}} onClick={() => handleRemove(id)}>Remove</button>
        </div>
    );
};

export default Car;