import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound({ useHistory }) {
  return (
    <section className='page-not-found'>
      <div className='page-not-found__container'>
        <h1 className='page-not-found__title'>404</h1>
        <p className='page-not-found__text'>Страница не найдена</p>
      </div>
      <Link className='page-not-found__link' to='/'>
        Назад
      </Link>
    </section>
  );
}

export default PageNotFound;
