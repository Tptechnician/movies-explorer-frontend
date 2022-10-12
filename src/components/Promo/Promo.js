import React from 'react';
import { Link } from 'react-router-dom';
import './Promo.css';
import promoLogo from '../../images/promo-landing-logo.svg';

function Promo() {
  return (
    <div className="promo">
      <div className="promo__coteiner-info">
        <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <Link className="promo__link" href="#aboutProject">
          Узнать больше
        </Link>
      </div>
      <img className="promo__logo" src={promoLogo} alt="Logo" />
    </div>
  );
}

export default Promo;
