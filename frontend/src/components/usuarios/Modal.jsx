import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import '../../assets/modal.css'

const divModalStyle = {
    position : 'fixed',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    top: '50%',
    left: '50%',
    transform : 'translate(-50%,-50%)',
    backgroundColor: '#fff',
    padding: '50px',
    zIndex: 1000
}

const divOverlayStyle = {
    position : 'fixed',
    top : 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor : 'rgba(0,0,0,.7)',
    zIndex : 1000
}

export default function Modal({open, close}){

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [edad, setEdad] = useState('');

    useEffect(()=>{
         setNombre(localStorage.getItem('nombre'));
         setCorreo(localStorage.getItem('correo'));
         setEdad(localStorage.getItem('edad'));
                
    }, [])

    if (!open) return null;

    return(
        <>
            <div style={divOverlayStyle}/>
            <div style={divModalStyle}>
                <p>{nombre}</p>
                <p>{correo}</p>
                <p>{edad}</p>
                <button onClick={close}>x</button>
            </div>

        </>
    )
}