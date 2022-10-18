import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ film }) {
  const { pathname } = useLocation();
  const [saved, setSaved] = useState(false);

  function handleSaveToogle() {
    setSaved(!saved);
    console.log(`Фильм сохранён ${saved}`);
  }

  function handleSaveDelete() {
    setSaved(false);
    console.log('Фильм удалён');
  }

  function getFilmDuration(mins) {
    return `${Math.floor(mins / 60)}ч ${mins % 60}м`;
  }

  return (
    <li className='movieCard'>
      <a className='movieCard__link' href={film.trailerLink} target='_blank' rel='noreferrer'>
        <img
          className='movieCard__image'
          src={`https://api.nomoreparties.co${film.image.url}`}
          alt={film.nameRU}
        />
      </a>
      <div className='movieCard__wraper'>
        <h2 className='movieCard__title'>{`${film.nameRU}`}</h2>
        {pathname === '/saved-movies' ? (
          <button
            type='button'
            className='movieCard__button movieCard__button_delete'
            onClick={handleSaveDelete}
          />
        ) : (
          <button
            type='button'
            className={
              saved
                ? 'movieCard__button MovieCard__button_active'
                : 'movieCard__button MovieCard__button_inactive'
            }
            onClick={handleSaveToogle}
          />
        )}
      </div>
      <p className='movieCard__duration'>{getFilmDuration(film.duration)}</p>
    </li>
  );
}

export default MoviesCard;
