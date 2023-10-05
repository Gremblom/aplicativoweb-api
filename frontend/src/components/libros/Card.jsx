import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

import '../../assets/card.css';
import {Read} from '../API/API';

export default function Card(){

  const APIData = Read('libros');

  const Borrar = (coleccion, id)=>{

    axios.delete(`http://localhost:6996/api/${coleccion}/del/${id}`)
      .then(()=>{
        window.location.reload();
      })
  } 

  return(
    <div className='bodyContainer'>
      <div>
      <Link to="/createBook"><button className="btn">Create</button></Link>
      </div>
      {APIData.map((data)=>{
        return(
          <div className="card">
            <div className="content">
              <p className="heading" >{data.nombre}</p>
              <p className="para">{data.autor}</p>
              <p className="para">{data.genero[0]}</p>
              <p className="para">{data.sinopsis}</p>
              <p className="para">{data.estado}</p>
              <div className='buttons'>
                <button className="btn" onClick={() => Borrar('libros', data.id)}>Delete</button>
                <Link to='/updateBook' className="btn" onClick={() => {
                  const keepVal = localStorage.getItem('reload');
                  localStorage.clear();
                  localStorage.setItem('reload', keepVal);
                  localStorage.setItem('id', parseInt(data.id));
                  localStorage.setItem('nombre', data.nombre);
                  localStorage.setItem('genero', data.genero);
                  localStorage.setItem('autor', data.autor);
                  localStorage.setItem('estado', data.estado);
                }}>Update</Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}