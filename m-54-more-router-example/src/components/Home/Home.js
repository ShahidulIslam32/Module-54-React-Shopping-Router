import React from 'react';
import Cart from '../Cart/Cart';
import './Home.css'
import useTshirts from './../../hooks/useTshirts';
import Tshirt from '../Tshirt/Tshirt';
import { useState } from 'react';
import swal from 'sweetalert';


const Home = () => {
    const [tshirts, setTshirts] = useTshirts()
    const [cart , setCart] = useState([])
    const handleAddToCart = (selectedItem) => {
        let ifExist = cart.find(tshirt => tshirt.id === selectedItem.id)
        if(!ifExist){
            swal("Good job!", "Item Successfully Addedd!", "success");
            const newCart = [...cart, selectedItem]
            setCart(newCart)
            
        }
        else{
            swal("Sorry!", "Your Selected Item Already Addedd !!", "warning");
        }        
    }
    const removeFromCart = (selectedItem) => {
        let restItem = cart.filter(tshirt => tshirt.id !== selectedItem.id)
        setCart(restItem)
        if(restItem){
            swal({
                title: "Item Deleted!",
                text: "Your Selected Item Successfully Deleted",
                icon: "success",
            });
        }
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">          
                {
                    tshirts.map(tshirt => <Tshirt key={tshirt.id} tshirt={tshirt} handleAddToCart={handleAddToCart}></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;