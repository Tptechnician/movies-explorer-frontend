import React, { useState } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { savedInitialCards } from '../../utils/savedInitialCards';

function SavedMovies() {
  const [searchFormError, setSearchFormError] = useState(false);
  const textError = 'Ошибка SearchForm';
  return (
    <section className='movies'>
      <div className='movies__wrapper'>
        <SearchForm />
      </div>
      {searchFormError ? (
        <div className='movies__error'>{textError}</div>
      ) : (
        <MoviesCardList initialCards={savedInitialCards} />
      )}
    </section>
  );
}

export default SavedMovies;
