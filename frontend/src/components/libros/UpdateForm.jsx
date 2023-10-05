import React, {useState, useEffect}  from 'react';
import {Form} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import '../../assets/form.css';
import {Read} from "../API/API";

export default function CreateForm(){

    const [id, setId] = useState(0);
    const [nombre, setNombre] = useState('');
    const [genero, setGenero] = useState('');
    const [autor, setAutor] = useState('');
    const [estado, setEstado] = useState('');

    useEffect(()=>{
        setId(localStorage.getItem('id'));
        setNombre(localStorage.getItem('nombre'));
        setGenero(localStorage.getItem('genero'));
        setAutor(localStorage.getItem('autor'));
        setEstado(localStorage.getItem('estado'));
        
    }, []);

    const Update = async ()=>{
        try {
            const updatedDoc = {
                id,
                nombre,
                genero,
                autor,
                estado
            }
    
            axios.patch(`http://localhost:6996/api/libros/upd/${id}`, updatedDoc)
                .then(()=>{
                    window.location.reload();
                })   
        } catch (error) {
            console.log(error);
        }
        
    }

    const APIData = Read('generos');

    

    return(
        <div className="form-container">
            <div className="form-box">
            <h2>Update Book</h2>
            <Form>
                <div className="user-box">
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <label>Nombre</label>
                </div>
                <div className="user-box">
                    <select onChange={(e)=> setGenero(parseInt(e.target.value))}>
                        {APIData.map((data)=>{
                            return(
                                <option value={data.id}>{data.nombre}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="user-box">
                    <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)}/>
                    <label>Autor</label>
                </div>
                <div className="user-box">
                    <input type="text" value={estado} onChange={(e)=> setEstado(e.target.value)} />
                    <label>Estado</label>
                </div>
                <Link to='/libros' type='submit' onClick={Update} >Submit</Link>
            </Form>
            </div>
        </div>
    )
}