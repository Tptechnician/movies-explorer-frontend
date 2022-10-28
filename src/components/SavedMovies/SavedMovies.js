import React, { useEffect, useState } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ toggleSavedMovies, savedMovies }) {
  const [searchFormValid, setSearchFormValid] = useState(true);
  const [checkbox, setСheckbox] = useState(false);
  const [textError, setTextError] = useState('Здесь будут находиться сохранённые вами фильмы');
  const [foundSavedMovies, setFoundSavedMovies] = useState([]);

  function handleСheckboxChange() {
    const newСheckbox = !checkbox;
    setСheckbox(newСheckbox);
  }

  function handleSearchMovies(inputSearch, checkbox) {
    const filterSaveMovies = foundSavedMovies.filter(({ nameRU }) =>
      nameRU.toLowerCase().includes(inputSearch.toLowerCase()),
    );
    if (checkbox) {
      searchMoviesOnCheckbox(filterSaveMovies);
    } else {
      searchMoviesOffCheckbox(filterSaveMovies);
    }
  }

  function searchMoviesOnCheckbox(filterSaveMovies) {
    const shortFilms = filterSaveMovies.filter(({ duration }) => duration <= 40);
    if (filterSaveMovies.length) {
      setFoundSavedMovies(shortFilms);
    } else {
      setTextError('Ничего не найдено');
      setFoundSavedMovies([]);
    }
  }

  function searchMoviesOffCheckbox(filterSaveMovies) {
    if (filterSaveMovies.length) {
      setFoundSavedMovies(filterSaveMovies);
    } else {
      setTextError('Ничего не найдено');
      setFoundSavedMovies([]);
    }
  }

  useEffect(() => {
    checkbox ? searchMoviesOnCheckbox(foundSavedMovies) : setFoundSavedMovies(savedMovies);
  }, [checkbox]);

  useEffect(() => {
    setFoundSavedMovies(savedMovies);
  }, [savedMovies]);

  return (
    <main className='movies'>
      <div className='movies__wrapper'>
        <SearchForm
          formValid={setSearchFormValid}
          textError={setTextError}
          onSearch={handleSearchMovies}
          onCheckbox={handleСheckboxChange}
          checkbox={checkbox}
        />
      </div>
      {!searchFormValid || !foundSavedMovies.length ? (
        <section className='movies__error'>
          <h1 className='movies__error__text'>{textError}</h1>
        </section>
      ) : (
        <MoviesCardList savedMovies={foundSavedMovies} toggleSavedMovies={toggleSavedMovies} />
      )}
    </main>
  );
}

export default SavedMovies;
