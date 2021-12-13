import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';

const Cars = () => {
    // reduce
    const carsObject = [
        {id: 1, name: 'Aston Martin', price: 125},
        {id: 2, name: 'Audi', price: 145},
        {id: 3, name: 'BMW', price: 177},
        {id: 4, name: 'Cadillac', price: 152},
        {id: 5, name: 'Ferrari', price: 255}
    ];
    const totalReducer = (previous, current) => previous + current.price;
    const getTotal = carsObject.reduce(totalReducer, 0);



    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('./cars.json')
        .then(res => res.json())
        .then(data => setCars(data))
    }, []);
    return (
        <div>
            <h2>Get Cars...!</h2>
            {/* show the reduce value on UI */}
            <h1>Total price: ${getTotal}</h1>
            {
                cars.map(car => <Car key={car.id} car={car}></Car>)
            }
        </div>
    );
};

export default Cars;