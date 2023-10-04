import React from 'react';

import '../../assets/card.css';
import {Read} from '../API/APISpecial';

export default function Card(){

  const APIData = Read('stockLibros');
  
  return(
    <div className='bodyContainer'>
      {APIData.map((data)=>{
        return(
          <div className="card">
            <div className="content">
              <p className="heading" >{data.libroNombre[0]}</p>
              <p className="para">Stock: {data.cantidad_disponible}</p>
              <p className="para">Precio: {data.precio_unitario}</p>
              <p className="para">Estado: {data.libroEstado[0]}</p>
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