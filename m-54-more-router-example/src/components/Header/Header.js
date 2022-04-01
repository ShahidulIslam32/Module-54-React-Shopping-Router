import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const HEader = () => {
    return (
        <div>
            <nav>
                    <Link to="/">Home</Link>
                    <Link to="/orders">Order Review</Link>
                    <Link to="/grandpa">Grandpa</Link>
            </nav>
            <h1>Welcome to T-Shirt Mania</h1>
        </div>
    );
};

export default HEader;