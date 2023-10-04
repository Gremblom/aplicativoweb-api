import React from 'react';
import {Link} from "react-router-dom";

import '../assets/header.css';

export default function Header(){
    return(
    <div className='headerBar'>
        <h1 style={{paddingLeft : '5rem'}}>BookShelf</h1>
        <div className='links'>
            <Link to="/usuarios">Usuarios</Link>
            <Link to="/libros">Libros</Link>
            <Link to="/rentas">Rentas</Link>
            <Link to="/generos">Generos</Link>
            <Link to="/inventario">Inventario</Link>
        </div>
    </div>
    )
}