import React, {useState} from 'react';

import '../../assets/card.css';
import {Read} from '../API/API';

export default function Card(){

  const APIData = Read('usuarios');   

  return(
    <div className='bodyContainer'>
      {APIData.map((data)=>{
        return(
          <div className="card">
            <div className="content">
              <p className="heading" >{data.nombre}</p>
              <p className="para">{data.correo}</p>
              <p className="para">{data.edad} años</p>
              <div className='buttons'>
                <button class="btn">Delete</button>
                <button class="btn">Update</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
