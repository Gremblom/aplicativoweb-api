import React, {useState, useEffect} from 'react';

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
    const [genero, setGenero] = useState('');
    const [autor, setAutor] = useState('');
    const [sinopsis, setSinopsis] = useState('');
    const [estado, setEstado] = useState('');

    useEffect(()=>{
        setNombre(localStorage.getItem('nombre'));
        setGenero(localStorage.getItem('genero'));
        setAutor(localStorage.getItem('autor'));
        setSinopsis(localStorage.getItem('sinopsis'));
        setEstado(localStorage.getItem('estado'));
    }, [])

    if (!open) return null;

    return(
        <>
            <div style={divOverlayStyle}/>
            <div style={divModalStyle}>
                <p>{nombre}</p>
                <p>{genero}</p>
                <p>{autor}</p>
                <p>{sinopsis}</p>
                <p>{estado}</p>
                <button onClick={close}>x</button>
            </div>

        </>
    )
}