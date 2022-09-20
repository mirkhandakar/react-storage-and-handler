import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 15;
    const second = 8;
    const result = multiply(first, second);
    const sum = add(first, second);
    return (
        <div>
            <h3>This is shoes compo</h3>
            <p>Result: {result} and Sum: {sum}</p>
        </div>
    );
};

export default Shoes;