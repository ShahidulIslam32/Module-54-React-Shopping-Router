import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Cart.css'

const Cart = ({ removeFromCart,cart}) => {
    let command;
    if(cart.length === 0){
       command = <h4>Please Add One Item For Continue Shopping..</h4>
    }
    else{
        command = <h4>Thanks For Adding</h4>
    }
    return (
        <div className='cart'>
            <h3>Total Item Selected : {cart.length}</h3>
            {command}
            {
                cart.map(tshirt => <p> <img style={{ width: '50px', display: 'flex' }} src={tshirt.image} alt="" /><p>Price: {tshirt.price} $</p>{tshirt.title} <br />  <FontAwesomeIcon onClick={() => removeFromCart(tshirt)} icon={faDeleteLeft} /></p>) 
            }
            
        </div>
    );
};

export default Cart;