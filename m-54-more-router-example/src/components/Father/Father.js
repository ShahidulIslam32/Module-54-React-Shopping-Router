import React from 'react';
import Self from './../Self/Self';
import Sister from './../Sister/Sister';
import Brother from './../Brother/Brother';

const Father = ({home}) => {
    return (
        <div>
            <h1>Father</h1>
            house {home}
           <div style={{display:'flex'}}>
                <Self home={home}></Self>
                <Sister home={home}></Sister>
                <Brother home={home}></Brother>
           </div>
        </div>
    );
};

export default Father;