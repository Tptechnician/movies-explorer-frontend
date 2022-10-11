import React from 'react';
import './LogoLink.css';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoImage } from '../../images/header-logo.svg';

function LogoLink() {
  return (
    <Link className="logoLink" to="/">
      <LogoImage />
    </Link>
  );
}

export default LogoLink;
