import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesApi from '../../utils/MoviesApi';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({ toggleSavedMovies, savedMovies, getMovies }) {
  const [searchFormValid, setSearchFormValid] = useState(true);
  const [checkbox, setСheckbox] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [textError, setTextError] = useState('Введите название фильма для поиска');
  const [filterMovies, setFilterMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState(null);

  function handleСheckboxChange() {
    setСheckbox(!checkbox);
  }

  function handleSearchMovies(inputSearch, checkbox) {
    setIsLoading(true);
    const localStorageMovies = JSON.parse(localStorage.getItem('movies'));
    try {
      const searchMovies = localStorageMovies.filter(({ nameRU }) =>
        nameRU.toLowerCase().includes(inputSearch.toLowerCase()),
      );
      setFilterMovies(searchMovies);
      localStorage.setItem('searchMovies', JSON.stringify(searchMovies));
      localStorage.setItem('moviesInputSearch', inputSearch);
      if (checkbox) {
        searchMoviesOnCheckbox(searchMovies, checkbox);
      } else {
        searchMoviesOffCheckbox(searchMovies, checkbox);
      }
    } catch (err) {
      setTextError(
        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного, перезагрузите страницу и попробуйте ещё раз',
      );
      setSearchFormValid(false);
      //localStorage.removeItem('searchMovies');
      // localStorage.removeItem('moviesInputSearch');
      // localStorage.removeItem('moviesInputCheckbox');
    } finally {
      setIsLoading(false);
    }
  }

  function searchMoviesOnCheckbox(searchMovies, checkbox) {
    const shortFilms = searchMovies.filter(({ duration }) => duration <= 40);
    if (searchMovies.length) {
      setFoundMovies(shortFilms);
      localStorage.setItem('moviesInputCheckbox', checkbox);
    } else {
      setTextError('Ничего не найдено');
      setFoundMovies(null);
    }
  }

  function searchMoviesOffCheckbox(searchMovies, checkbox) {
    if (searchMovies.length) {
      setFoundMovies(searchMovies);

      localStorage.setItem('moviesInputCheckbox', checkbox);
    } else {
      setTextError('Ничего не найдено');
      setFoundMovies(null);
    }
  }

  useEffect(() => {
    const localStorageMovies = localStorage.getItem('movies');
    const localStorageSearchMovies = localStorage.getItem('searchMovies');
    const localStorageMoviesInputSearch = localStorage.getItem('moviesInputSearch');
    const localStorageMoviesInputCheckbox = localStorage.getItem('moviesInputCheckbox');

    if (!localStorageMovies) {
      getMovies();
    }

    if (localStorageSearchMovies) {
      const searchedMovies = JSON.parse(localStorageSearchMovies);

      setFilterMovies(searchedMovies);
    }

    if (localStorageMoviesInputSearch) {
      setInputValue(localStorageMoviesInputSearch);
    }

    if (localStorageMoviesInputCheckbox === 'true') {
      setСheckbox(true);
    }
  }, []);

  useEffect(() => {
    checkbox
      ? searchMoviesOnCheckbox(filterMovies, checkbox)
      : searchMoviesOffCheckbox(filterMovies, checkbox);
  }, [checkbox, filterMovies]);

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
