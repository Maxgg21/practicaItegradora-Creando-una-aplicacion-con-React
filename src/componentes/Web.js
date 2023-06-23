import React from 'react';
import Encabezado from './Encabezado';
import Banner from './Banner';
import Productos from './Productos';


function Web() {
    return (
        <div className='container'>
            <Encabezado />
            <Banner />
            <Productos />
        </div>
    );
}

export default Web;