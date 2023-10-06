import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import BookCard from "./components/libros/Card";
import BookForm from "./components/libros/CreateForm";
import UpdBookForm from "./components/libros/UpdateForm";

import UserCard from "./components/usuarios/Card";
import UserForm from "./components/usuarios/CreateForm";

import RentaCard from "./components/rentas/Card";
import RentaForm from "./components/rentas/CreateForm";

import GeneroCard from "./components/generos/Card";
import GeneroForm from "./components/generos/CreateForm";
import UpdGeneroForm from "./components/generos/UpdateForm";

import InventarioCard from "./components/inventario/Card";

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
          <Route exact path='/updateBook' component={UpdBookForm} />
        </div>
        <div>
          <Route exact path='/libros' component={BookCard} />
        </div>
        <div>
          <Route exact path='/usuarios' component={UserCard} />
          <Route exact path='/createUser' component={UserForm} />
        </div>
        <div>
          <Route exact path='/rentas' component={RentaCard} />
          <Route exact path='/createRentas' component={RentaForm} />
        </div>
        <div>
          <Route exact path='/generos' component={GeneroCard} />
          <Route exact path='/createGenre' component={GeneroForm} />
          <Route exact path='/updateGenre' component={UpdGeneroForm} />
        </div>
        <div>
          <Route exact path='/inventario' component={InventarioCard} />
        </div>
      </div>
    </Router>
  );
}

export default App;