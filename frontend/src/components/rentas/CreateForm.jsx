import React, {useState} from 'react';
import {Form} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import '../../assets/form.css';
import {Read} from "../API/API";

export default function CreateForm(){

    const Create = async ()=>{
        localStorage.setItem('reload', true);

        try {
            const newDoc = {
                id : rentas.length + 1,
                id_usuario,
                id_libro
            }

            axios.post(`http://localhost:6996/api/rentas/new`, newDoc)
                .then(()=>{
                    window.location.reload();
                })

        } catch (error) {
            console.log('Error', error);
        }
        
    }

    const rentas = Read('rentas');
    const books = Read('libros');
    const users = Read('usuarios');

    const [id_usuario, setIdUsuario] = useState(11);
    const [id_libro, setIdLibro] = useState(9);

    return(
        <div className="form-container">
            <div className="form-box">
            <h2>New Rent</h2>
            <Form>
                <div className="user-box">
                    <select onChange={(e) => setIdUsuario(parseInt(e.target.value))}>
                        {users.map((data)=>{
                            return(
                                <option value={data.id}>{data.correo}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="user-box">
                    <select onChange={(e)=> setIdLibro(parseInt(e.target.value))}>
                        {books.map((data)=>{
                            return(
                                <option value={data.id}>{data.nombre}</option>
                            )
                        })}
                    </select>
                </div>
                <Link to='/rentas' type='submit' onClick={Create} >Submit</Link>
            </Form>
            </div>
        </div>
    )
}