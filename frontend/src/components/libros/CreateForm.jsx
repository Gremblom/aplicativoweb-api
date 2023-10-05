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
                genero,
                autor,
                sinopsis,
                estado,
                id : cantBooks.length + 1
            }

            axios.post(`http://localhost:6996/api/libros/new`, newDoc)
                .then(()=>{
                    window.location.reload();
                })

        } catch (error) {
            console.log('Error', error);
        }
        
    }

    const APIData = Read('generos');
    const cantBooks = Read('libros');

    const [nombre, setNombre] = useState('');
    const [genero, setGenero] = useState('');
    const [autor, setAutor] = useState('');
    const [sinopsis, setSinopsis] = useState('');
    const [estado, setEstado] = useState('');

    return(
        <div className="form-container">
            <div className="form-box">
            <h2>New Book</h2>
            <Form>
                <div className="user-box">
                    <input type="text" name="" onChange={(e) => setNombre(e.target.value)} />
                    <label>Nombre</label>
                </div>
                <div className="user-box">
                    <select onChange={(e)=> setGenero(e.target.value)}>
                        {APIData.map((data)=>{
                            return(
                                <option value={data.id}>{data.nombre}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="user-box">
                    <input type="text" name="" onChange={(e) => setAutor(e.target.value)}/>
                    <label>Autor</label>
                </div>
                <div className="user-box">
                    <input type="text" name="" onChange={(e)=> setSinopsis(e.target.value)} />
                    <label>Sinopsis</label>
                </div>
                <div className="user-box">
                    <input type="text" name="" onChange={(e)=> setEstado(e.target.value)} />
                    <label>Estado</label>
                </div>
                <Link to='/libros' type='submit' onClick={Create} >Submit</Link>
            </Form>
            </div>
        </div>
    )
}