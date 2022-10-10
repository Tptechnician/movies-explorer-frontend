import React from 'react';
import './Header.css';
import LogoImage from '../LogoImage/LogoImage';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
  return (
    <header className={!loggedIn ? 'header' : 'header header_background-black'}>
      <LogoImage />
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
