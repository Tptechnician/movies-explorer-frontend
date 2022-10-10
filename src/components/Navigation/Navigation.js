import React from 'react';
import './Navigation.css';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import AuthorizedNavigation from '../AuthorizedNavigation/AuthorizedNavigation';

function Navigation({ loggedIn }) {
  return !loggedIn ? <AuthNavigation /> : <AuthorizedNavigation />;
}

export default Navigation;
