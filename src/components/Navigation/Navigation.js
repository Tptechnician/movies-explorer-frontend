import React from 'react';
import './Navigation.css';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import AuthorizedNavigation from '../AuthorizedNavigation/AuthorizedNavigation';

function Navigation({ loggedIn, onToggleMenu }) {
  return !loggedIn ? <AuthNavigation /> : <AuthorizedNavigation onToggleMenu={onToggleMenu} />;
}

export default Navigation;
