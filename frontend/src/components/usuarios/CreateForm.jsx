import React, {useState} from 'react';
import {Form} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import '../../assets/form.css';
import {Read} from "../API/API";

export default function CreateForm(){

    const Create = async ()=>{
        localStorage.setItem('reload', true)

        try {
            const newDoc = {
                nombre,
                correo,
                edad,
                id : cantBooks.length + 1
            }

            axios.post(`http://localhost:6996/api/usuarios/new`, newDoc)
                .then(()=>{
                    window.location.reload();
                })

        } catch (error) {
            console.log('Error', error);
        }
        
    }
    const cantBooks = Read('usuarios');

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [edad, setEdad] = useState('');

    return(
        <div className="form-container">
            <div className="form-box">
            <h2>New User</h2>
            <Form>
                <div className="user-box">
                    <input type="text" name="" onChange={(e) => setNombre(e.target.value)} />
                    <label>Nombre</label>
                </div>
                <div className="user-box">
                    <input type="text" name="" onChange={(e)=> setCorreo(e.target.value)} />
                    <label>Correo</label>
                </div>
                <div className="user-box">
                    <input type="text" name="" onChange={(e)=> setEdad(e.target.value)} />
                    <label>Edad</label>
                </div>
                <Link to='/libros' type='submit' onClick={Create} >Submit</Link>
            </Form>
            </div>
        </div>
    )
}