import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import BookCard from "./components/libros/Card";
import UserCard from "./components/usuarios/Card";
import RentaCard from "./components/rentas/Card";
import GeneroCard from "./components/generos/Card";
import InventarioCard from "./components/inventario/Card";
import BookForm from "./components/libros/CreateForm";
import Header from "./components/Header";

function App() {

  return (
    <Router>
      <div className='main'>
        <div className='headerContainer'>
          <Header />
        </div>
        <div>
          <Route exact path='/' component={BookCard} />
          <Route exact path='/createBook' component={BookForm} />
        </div>
        <div>
          <Route exact path='/libros' component={BookCard} />
        </div>
        <div>
          <Route exact path='/usuarios' component={UserCard} />
        </div>
        <div>
          <Route exact path='/rentas' component={RentaCard} />
        </div>
        <div>
          <Route exact path='/generos' component={GeneroCard} />
        </div>
        <div>
          <Route exact path='/inventario' component={InventarioCard} />
        </div>
      </div>
    </Router>
  );
}

export default App;