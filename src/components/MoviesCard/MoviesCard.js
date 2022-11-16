import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ film, toggleSavedMovies, savedMovies }) {
  const { pathname } = useLocation();
  const saved =
    pathname === '/saved-movies' ? true : savedMovies.some((i) => i.movieId === film.id);
  const savedMovieId =
    pathname === '/saved-movies'
      ? film._id
      : Object.assign({}, savedMovies.filter((i) => i.movieId === film.id)[0])._id;

  function handleSaveToogle() {
    toggleSavedMovies(film, saved, savedMovieId);
  }

  function getMovieDuration(mins) {
    return `${Math.floor(mins / 60)}ч ${mins % 60}м`;
  }

  return (
    <li className='movieCard'>
      <a className='movieCard__link' href={film.trailerLink} target='_blank' rel='noreferrer'>
        <img
          className='movieCard__image'
          src={
            pathname === '/saved-movies'
              ? film.image
              : `https://api.nomoreparties.co${film.image.url}`
          }
          alt={film.nameRU}
        />
      </a>
      <div className='movieCard__wraper'>
        <h2 className='movieCard__title'>{`${film.nameRU}`}</h2>
        {pathname === '/saved-movies' ? (
          <button
            type='button'
            className='movieCard__button movieCard__button_delete'
            onClick={handleSaveToogle}
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
      <p className='movieCard__duration'>{getMovieDuration(film.duration)}</p>
    </li>
  );
}

export default MoviesCard;
