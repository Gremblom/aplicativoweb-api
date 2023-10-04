import React from 'react';

import '../assets/header.css';

export default function Header(){
    return(
    <div className='headerBar'>
        <h1 style={{paddingLeft : '5rem'}}>BookShelf</h1>
        <div className='links'>
            <a href='#'>Usuarios</a>
            <a href='#'>Libros</a>
            <a href='#'>Rentas</a>
            <a href='#'>Generos</a>
            <a href='#'>Inventario</a>
        </div>
    </div>
    )
}