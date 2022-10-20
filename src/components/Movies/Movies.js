import React, { useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { initialCards } from '../../utils/initialCards';

function Movies() {
  const [searchFormError, setSearchFormError] = useState(false);
  const textError = 'Ошибка SearchForm';
  return (
    <main className='movies'>
      <div className='movies__wrapper'>
        <SearchForm />
      </div>
      {searchFormError ? (
        <div className='movies__error'>{textError}</div>
      ) : (
        <MoviesCardList initialCards={initialCards} />
      )}
    </main>
  );
}

export default Movies;
