import React, { useState } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ toggleSavedMovies, savedMovies }) {
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
        <MoviesCardList savedMovies={savedMovies} toggleSavedMovies={toggleSavedMovies} />
      )}
    </main>
  );
}

export default SavedMovies;
