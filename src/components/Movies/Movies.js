import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesApi from '../../utils/MoviesApi';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({ toggleSavedMovies, savedMovies }) {
  const [searchFormValid, setSearchFormValid] = useState(true);
  const [checkbox, setСheckbox] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [textError, setTextError] = useState('Введите название фильма для поиска');
  const [foundMovies, setFoundMovies] = useState(null);

  function handleСheckboxChange() {
    const newСheckbox = !checkbox;
    setСheckbox(newСheckbox);
  }

  function handleSearchMovies(inputSearch, checkbox) {
    setIsLoading(true);
    MoviesApi.getMovies()
      .then((movies) => {
        const filterMovies = movies.filter(({ nameRU }) =>
          nameRU.toLowerCase().includes(inputSearch.toLowerCase()),
        );
        if (checkbox) {
          searchMoviesOnCheckbox(filterMovies, inputSearch, checkbox);
        } else {
          searchMoviesOffCheckbox(filterMovies, inputSearch, checkbox);
        }
      })
      .catch((err) => {
        setTextError(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
        );
        setSearchFormValid(false);
        localStorage.removeItem('movies');
        localStorage.removeItem('moviesInputSearch');
        localStorage.removeItem('moviesInputCheckbox');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function searchMoviesOnCheckbox(filterMovies, inputSearch, checkbox) {
    const shortFilms = filterMovies.filter(({ duration }) => duration <= 40);
    if (filterMovies.length) {
      setFoundMovies(shortFilms);
      localStorage.setItem('movies', JSON.stringify(shortFilms));
      localStorage.setItem('moviesInputSearch', inputSearch);
      localStorage.setItem('moviesInputCheckbox', checkbox);
    } else {
      setTextError('Ничего не найдено');
      setFoundMovies(null);
    }
  }

  function searchMoviesOffCheckbox(filterMovies, inputSearch, checkbox) {
    if (filterMovies.length) {
      setFoundMovies(filterMovies);
      localStorage.setItem('movies', JSON.stringify(filterMovies));
      localStorage.setItem('moviesInputSearch', inputSearch);
      localStorage.setItem('moviesInputCheckbox', checkbox);
    } else {
      setTextError('Ничего не найдено');
      setFoundMovies(null);
    }
  }

  useEffect(() => {
    const localStorageMovies = localStorage.getItem('movies');
    if (localStorageMovies) {
      const filterMovies = JSON.parse(localStorageMovies);
      setFoundMovies(filterMovies);
    }

    const localStorageMoviesInputSearch = localStorage.getItem('moviesInputSearch');
    const localStorageMoviesInputCheckbox = localStorage.getItem('moviesInputCheckbox');

    if (localStorageMoviesInputSearch) {
      setInputValue(localStorageMoviesInputSearch);
    }

    if (localStorageMoviesInputCheckbox === 'true') {
      setСheckbox(true);
    }
  }, []);

  return (
    <main className='movies'>
      <div className='movies__wrapper'>
        <SearchForm
          formValid={setSearchFormValid}
          textError={setTextError}
          onSearch={handleSearchMovies}
          onCheckbox={handleСheckboxChange}
          checkbox={checkbox}
          inputValue={inputValue}
        />
      </div>
      {searchFormValid && foundMovies ? (
        isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            initialCards={foundMovies}
            savedMovies={savedMovies}
            toggleSavedMovies={toggleSavedMovies}
          />
        )
      ) : (
        <section className='movies__error'>
          <h1 className='movies__error__text'>{textError}</h1>
        </section>
      )}
    </main>
  );
}

export default Movies;
