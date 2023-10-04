import React, {useState} from 'react';

import '../../assets/form.css';
import {Read, Create} from "../API/API";

export default function CreateForm(){

    const APIData = Read('generos');
    const cantBooks = Read('libros');

    const [nombre, setNombre] = useState('');
    const [genero, setGenero] = useState('');
    const [autor, setAutor] = useState('');
    const [sinopsis, setSinopsis] = useState('');
    const [estado, setEstado] = useState('');

    function preparePost(){
        const newDoc = {
            nombre,
            genero,
            autor,
            sinopsis,
            estado,
            id : cantBooks.length + 1
        }

        Create('libros', newDoc);
    }

    return(
        <div className="form-container">
            <div className="form-box">
            <h2>New Book</h2>
            <form>
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
                <a href="#" onClick={() => preparePost()}>Submit</a>
            </form>
            </div>
        </div>
    )
}