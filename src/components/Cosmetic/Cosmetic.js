import React from 'react';
import { addToDB } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;

    const addToCart = (id) => {
        addToDB(id);
    }
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>Has an ID: {id}</small></p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;