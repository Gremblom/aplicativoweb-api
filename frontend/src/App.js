import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import BookCard from "./components/libros/Card";
import UserCard from "./components/usuarios/Card";
import Header from "./components/Header";

function App() {

  return (
    <Router>
      <div className='main'>
        <div className='headerContainer'>
          <Header />
        </div>
        <div>
          <Route exact path='/libros' component={BookCard} />
        </div>
        <div>
          <Route exact path='/usuarios' component={UserCard} />
        </div>
      </div>
    </Router>
  );
}

export default App;