import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

import '../../assets/card.css';
import {Read} from '../API/API';

export default function Card(){

  const APIData = Read('usuarios');   

  const Borrar = (coleccion, id)=>{

    axios.delete(`http://localhost:6996/api/${coleccion}/del/${id}`)
      .then(()=>{
        window.location.reload();
      })
  } 

  return(
    <div className='bodyContainer'>
      <div>
      <Link to="/createUser"><button className="btn">Create</button></Link>
      </div>
      {APIData.map((data)=>{
        return(
          <div className="card">
            <div className="content">
              <p className="heading" >{data.nombre}</p>
              <p className="para">{data.correo}</p>
              <p className="para">{data.edad} años</p>
              <div className='buttons'>
              <button className="btn" onClick={() => Borrar('usuarios', data.id)}>Delete</button>
                <button class="btn">Update</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
