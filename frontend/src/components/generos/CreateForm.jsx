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
                id : APIData.length + 1
            }

            axios.post(`http://localhost:6996/api/generos/new`, newDoc)
                .then(()=>{
                    window.location.reload();
                })

        } catch (error) {
            console.log('Error', error);
        }
        
    }

    const APIData = Read('generos');

    const [nombre, setNombre] = useState('');

    return(
        <div className="form-container">
            <div className="form-box">
            <h2>New Genre</h2>
            <Form>
                <div className="user-box">
                    <input type="text" name="" onChange={(e) => setNombre(e.target.value)} />
                    <label>Nombre</label>
                </div>
                <Link to='/generos' type='submit' onClick={Create} >Submit</Link>
            </Form>
            </div>
        </div>
    )
}