import React, {useState} from 'react';

import '../../assets/card.css';
import {Read} from '../API/API';

export default function Card(){

  const APIData = Read('libros');
  
  return(
    <div className='bodyContainer'>
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
                <button className="btn">Delete</button>
                <button className="btn">Update</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}