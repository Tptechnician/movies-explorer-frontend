import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  }

  return (
    <div className="app">
      <Header loggedIn={loggedIn} onToggleMenu={toggleMenu} />
      <Menu isOpen={isMenuOpen} onToggleMenu={toggleMenu} />
    </div>
  );
}

export default App;
