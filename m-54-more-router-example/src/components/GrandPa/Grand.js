import React from 'react';
import Uncle from '../Uncle/Uncle';
import Father from './../Father/Father';
import Aunt from './../Aunt/Aunt';
import './Grand.css'
import { useState } from 'react';

const Grand = () => {
    const [home , setHome] = useState(1)
    let handleHouse = () => {
        let increase = home + 1
        setHome(increase)
    }
    return (
        <div className='grand'>
            <h1>Grand Pa</h1>
            <button onClick={handleHouse}>Buy A House</button>
            <p>House {home}</p>
            <section style={{ display: 'flex' }}>
                <Father home={home}></Father>
                <Uncle home={home}></Uncle>
                <Aunt home={home}></Aunt>
            </section>
        </div>
    );
};

export default Grand;