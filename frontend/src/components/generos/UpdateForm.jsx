import React, {useState, useEffect}  from 'react';
import {Form} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import '../../assets/form.css';

export default function CreateForm(){

    const [id, setId] = useState(0);
    const [nombre, setNombre] = useState('');

    useEffect(()=>{
        setId(localStorage.getItem('id'));
        setNombre(localStorage.getItem('nombre'));        
    }, []);

    const Update = async ()=>{
        try {
            const updatedDoc = {
                id,
                nombre,
            }
    
            axios.patch(`http://localhost:6996/api/generos/upd/${id}`, updatedDoc)
                .then(()=>{
                    window.location.reload();
                })   
        } catch (error) {
            console.log(error);
        }
        
    }

    return(
        <div className="form-container">
            <div className="form-box">
            <h2>Update Book</h2>
            <Form>
                <div className="user-box">
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <label>Nombre</label>
                </div>
                <Link to='/generos' type='submit' onClick={Update} >Submit</Link>
            </Form>
            </div>
        </div>
    )
}