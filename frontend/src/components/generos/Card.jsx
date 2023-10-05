import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

import '../../assets/card.css';
import {Read} from '../API/API';

export default function Card(){

  const APIData = Read('generos');
  
  const Borrar = (coleccion, id)=>{

    axios.delete(`http://localhost:6996/api/${coleccion}/del/${id}`)
      .then(()=>{
        window.location.reload();
      })
  }

  return(
    <div  className='bodyPage'>
      <div>
      <Link to="/createGenre"><button className="btn">Create</button></Link>
      </div>
      <div className='bodyContainer'>
        {APIData.map((data)=>{
            return(
              <div className="card">
                <div className="content">
                  <p className="heading" >{data.nombre}</p>
                  <div className='buttons'>
                  <button className="btn" onClick={() => Borrar('generos', data.id)}>Delete</button>
                    <Link to='/updateGenre' className="btn" onClick={() => {
                      const keepVal = localStorage.getItem('reload');
                      localStorage.clear();
                      localStorage.setItem('reload', keepVal);
                      localStorage.setItem('id', parseInt(data.id));
                      localStorage.setItem('nombre', data.nombre);    
                    }}>Update</Link>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
