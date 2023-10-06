import React from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

import '../../assets/card.css';
import {Read} from '../API/APISpecial';

export default function Card(){

  const APIData = Read('rentas');

  const Borrar = (coleccion, id)=>{

    axios.delete(`http://localhost:6996/api/${coleccion}/del/${id}`)
      .then(()=>{
        window.location.reload();
      })
  } 
  
  return(
    <div className='bodyPage'>
      <div>
        <Link to="/createRentas"><button className="btn">Create</button></Link>
      </div>
      <div className='bodyContainer'>
        {APIData.map((data)=>{
          return(
            <div className="card">
              <div className="content">
                <p className="heading">{data.id}</p>
                <p className="para">{data.libroNombre[0]}</p>
                <p className="para">{data.usuarioNombre[0]}</p>
                <div className='buttons'>
                  <button className="btn" onClick={() => Borrar('rentas', data.id)}>Delete</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}