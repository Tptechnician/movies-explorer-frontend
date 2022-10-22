import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ initialCards }) {
  function handleMore() {
    console.log('Добвить ещё фильмов');
  }
  return (
    <section className='moviesCards'>
      <ul className='moviesCards__list'>
        {initialCards.map((film) => (
          <MoviesCard key={film.id} film={film} />
        ))}
      </ul>
      <div className='moviesCards__button__conteiner'>
        <button className='moviesCards__button' type='button' onClick={handleMore}>
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
