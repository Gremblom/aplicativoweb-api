import React, {useState} from 'react';

import '../../assets/card.css';
import Modal from "./Modal";
import Read from '../API/Create';

export default function Card(){
  const [isOpen, setIsOpen] = useState(false);

  const APIData = Read('libros');

  const saveData = (data)=>{
    localStorage.clear();
    localStorage.setItem('nombre', data.nombre);
    localStorage.setItem('genero', data.genero);
    localStorage.setItem('autor', data.autor);
    localStorage.setItem('sinopsis', data.sinopsis);
    localStorage.setItem('estado', data.estado);
  }
  
  return(
    <div className='bodyContainer'>
      <Modal open={isOpen} close={() => setIsOpen(false)} />

      {APIData.map((data)=>{
        return(
          <div className="card">
            <div className="content">
              <p className="heading" >{data.nombre}</p>
              <p className="para">
                {data.autor}
              </p>
              <div className='buttons'>
                <button class="btn">Delete</button>
                <button class="btn">Update</button>
                <button class="btn" onClick={() =>{
                  saveData(data);
                  setIsOpen(true);
                }}>info</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
