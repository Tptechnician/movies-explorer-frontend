import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import LogoLink from '../LogoLink/LogoLink';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn, onToggleMenu }) {
  const { pathname } = useLocation();
  return (
    <header
      className={
        !loggedIn ? 'header' : pathname === '/' ? 'header' : 'header header_background-black'
      }
    >
      <LogoLink />
      <Navigation loggedIn={loggedIn} onToggleMenu={onToggleMenu} />
    </header>
  );
}

export default Header;
