import React from 'react';

import '../../assets/card.css';
import {Read} from '../API/APISpecial';

export default function Card(){

  const APIData = Read('rentas');
  
  return(
    <div className='bodyContainer'>
      {APIData.map((data)=>{
        return(
          <div className="card">
            <div className="content">
              <p className="heading" >{data.id}</p>
              <p className="para">{data.libroNombre[0]}</p>
              <p className="para">{data.usuarioNombre[0]}</p>
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