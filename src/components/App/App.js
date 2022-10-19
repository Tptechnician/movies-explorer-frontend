import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';

function App() {
  const { pathname } = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='app'>
      {pathname === '/' ||
      pathname === '/movies' ||
      pathname === '/saved-movies' ||
      pathname === '/profile' ? (
        <Header loggedIn={loggedIn} onToggleMenu={toggleMenu} />
      ) : (
        ''
      )}
      <Menu isOpen={isMenuOpen} onToggleMenu={toggleMenu} />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/signup'>
          <Register />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>
      </Switch>
      {pathname === '/' ||
      pathname === '/movies' ||
      pathname === '/saved-movies' ||
      pathname === '/profile' ? (
        <Footer />
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
