import React from 'react';
import './Header.css';
import LogoLink from '../LogoLink/LogoLink';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn, onToggleMenu }) {
  return (
    <header className={!loggedIn ? 'header' : 'header header_background-black'}>
      <LogoLink />
      <Navigation loggedIn={loggedIn} onToggleMenu={onToggleMenu} />
    </header>
  );
}

export default Header;
