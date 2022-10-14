import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='app'>
      <Header loggedIn={loggedIn} onToggleMenu={toggleMenu} />
      <Menu isOpen={isMenuOpen} onToggleMenu={toggleMenu} />
      <Switch>
        <Route path='/'>
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
