import React from 'react';
import './Tshirt.css'

const Tshirt = ({ handleAddToCart ,tshirt}) => {
    const { title, price, category, image } = tshirt
    return (
        <div className='products'>
            <img className='img' src={image} alt="" />
            <h4>Name : {title}</h4>
            <p>Price: {price} $</p>
            <p>Category: {category}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Add To Cart</button>
        </div>
    );
};

export default Tshirt;