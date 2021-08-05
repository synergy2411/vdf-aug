import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <h3>Products Loaded</h3>
            <ul>
                <li>
                    <Link to="/products/1">An online Course</Link>
                </li>
                <li>
                <Link to="/products/2?name=iphone">React Tutorial</Link>
                </li>
                <li>
                <Link to="/products/3">Redux for beginners</Link>
                </li>
            </ul>
        </div>
    );
}

export default Products;

