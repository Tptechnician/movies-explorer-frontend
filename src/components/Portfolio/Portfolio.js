import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__links'>
        <li className='portfolio__link-item'>
          <a
            className='portfolio__link'
            href='https://github.com/Tptechnician/how-to-learn'
            target={'_blank'}
            rel={'noreferrer'}
          >
            <p className='portfolio__link__title'>Статичный сайт</p>
            <div className='portfolio__link__icon'></div>
          </a>
        </li>
        <li className='portfolio__link-item'>
          <a
            className='portfolio__link'
            href='https://github.com/Tptechnician/russian-travel'
            target={'_blank'}
            rel={'noreferrer'}
          >
            <p className='portfolio__link__title'>Адаптивный сайт</p>
            <div className='portfolio__link__icon'></div>
          </a>
        </li>
        <li className='portfolio__link-item'>
          <a
            className='portfolio__link'
            href='https://github.com/Tptechnician/react-mesto-api-full'
            target={'_blank'}
            rel={'noreferrer'}
          >
            <p className='portfolio__link__title'>Одностраничное приложение</p>
            <div className='portfolio__link__icon'></div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
