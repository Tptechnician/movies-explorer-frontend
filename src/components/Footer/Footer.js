import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__conteiner'>
        <p className='footer__copyright'>&copy; 2022</p>
        <ul className='footer__links'>
          <li className='footer__link-item'>
            <a
              className='footer__link'
              href='https://praktikum.yandex.ru/'
              target={'_blank'}
              rel={'noreferrer'}
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__link-item'>
            <a
              className='footer__link'
              href='https://github.com/Tptechnician'
              target={'_blank'}
              rel={'noreferrer'}
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
