import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ initialCards, toggleSavedMovies, savedMovies }) {
  const SIZE_WIDTH_BIG = 1194;
  const SIZE_WIDTH_INTERMEDIATE = 906;
  const SIZE_WIDTH_MEDIUM = 765;
  const SIZE_WIDTH_SMALL = 320;

  const NUMBER_MOVIES_TO_RENDER_BIG = 12;
  const NUMBER_MOVIES_TO_RENDER_INTERMEDIATE = 9;
  const NUMBER_MOVIES_TO_RENDER_MEDIUM = 8;
  const NUMBER_MOVIES_TO_RENDER_SMALL = 5;

  const NUMBER_MOVIES_TO_ADD_BIG = 4;
  const NUMBER_MOVIES_TO_ADD_INTERMEDIATE = 3;
  const NUMBER_MOVIES_TO_ADD_MEDIUM = 2;

  const NUMBER_ZERO = 0;

  const { pathname } = useLocation();
  const [sizeWidth, setSizeWidth] = useState('');
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [isShowButtonMoreMovies, setIsShowButtonMoreMovies] = useState(false);
  const [numberMoviesToRender, setNumberMoviesToRender] = useState(0);
  const [numberMoviesToAdd, setNumberMoviesToAdd] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setTimeout(handleResize, 1000);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleResize() {
    const width = document.documentElement.clientWidth;
    return setSizeWidth(width);
  }

  function countNumberMoviesToRender() {
    if (sizeWidth >= SIZE_WIDTH_BIG) {
      setNumberMoviesToRender(NUMBER_MOVIES_TO_RENDER_BIG);
      setNumberMoviesToAdd(NUMBER_MOVIES_TO_ADD_BIG);
    } else if (sizeWidth < SIZE_WIDTH_BIG && sizeWidth >= SIZE_WIDTH_INTERMEDIATE) {
      setNumberMoviesToRender(NUMBER_MOVIES_TO_RENDER_INTERMEDIATE);
      setNumberMoviesToAdd(NUMBER_MOVIES_TO_ADD_INTERMEDIATE);
    } else if (sizeWidth < SIZE_WIDTH_INTERMEDIATE && sizeWidth >= SIZE_WIDTH_MEDIUM) {
      setNumberMoviesToRender(NUMBER_MOVIES_TO_RENDER_MEDIUM);
      setNumberMoviesToAdd(NUMBER_MOVIES_TO_ADD_MEDIUM);
    } else if (sizeWidth < SIZE_WIDTH_MEDIUM && sizeWidth >= SIZE_WIDTH_SMALL) {
      setNumberMoviesToRender(NUMBER_MOVIES_TO_RENDER_SMALL);
      setNumberMoviesToAdd(NUMBER_MOVIES_TO_ADD_MEDIUM);
    }
  }

  function handleAddMoreMovies() {
    setMoviesToRender(initialCards.slice(NUMBER_ZERO, moviesToRender.length + numberMoviesToAdd));
    if (moviesToRender.length >= initialCards.length - numberMoviesToAdd) {
      setIsShowButtonMoreMovies(false);
    }
  }

  useEffect(() => {
    countNumberMoviesToRender();
    handleResize();
  }, [sizeWidth]);

  useEffect(() => {
    if (pathname === '/movies') {
      setMoviesToRender(initialCards.slice(NUMBER_ZERO, numberMoviesToRender));
      if (initialCards.length <= numberMoviesToRender) {
        setIsShowButtonMoreMovies(false);
      } else {
        setIsShowButtonMoreMovies(true);
      }
    }
  }, [initialCards, numberMoviesToRender]);

  useEffect(() => {
    if (pathname === '/saved-movies') {
      setMoviesToRender(savedMovies);
      setIsShowButtonMoreMovies(false);
    }
  }, [savedMovies]);

  return (
    <section className='moviesCards'>
      <ul className='moviesCards__list'>
        {moviesToRender.map((film) => (
          <MoviesCard
            key={film.id || film._id}
            film={film}
            toggleSavedMovies={toggleSavedMovies}
            savedMovies={savedMovies}
          />
        ))}
      </ul>
      <div className='moviesCards__button__conteiner'>
        <button
          className={
            isShowButtonMoreMovies
              ? 'moviesCards__button'
              : 'moviesCards__button moviesCards__button_no-active'
          }
          type='button'
          onClick={handleAddMoreMovies}
        >
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
