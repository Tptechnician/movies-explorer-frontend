import React from 'react';
import './LogoImage.css';
import headerLogo from '../../images/header-logo.svg';

function LogoImage() {
  return <img className="header__logo" src={headerLogo} alt="logo" />;
}

export default LogoImage;
