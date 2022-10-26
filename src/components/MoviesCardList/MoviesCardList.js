import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ initialCards }) {
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
    if (sizeWidth >= 1194) {
      setNumberMoviesToRender(12);
      setNumberMoviesToAdd(4);
    } else if (sizeWidth < 1194 && sizeWidth >= 906) {
      setNumberMoviesToRender(9);
      setNumberMoviesToAdd(3);
    } else if (sizeWidth < 905 && sizeWidth >= 765) {
      setNumberMoviesToRender(8);
      setNumberMoviesToAdd(2);
    } else if (sizeWidth < 764 && sizeWidth >= 320) {
      setNumberMoviesToRender(5);
      setNumberMoviesToAdd(2);
    }
  }

  function handleAddMoreMovies() {
    setMoviesToRender(initialCards.slice(0, moviesToRender.length + numberMoviesToAdd));
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
      setMoviesToRender(initialCards.slice(0, numberMoviesToRender));
      if (initialCards.length <= numberMoviesToRender) {
        setIsShowButtonMoreMovies(false);
      } else {
        setIsShowButtonMoreMovies(true);
      }
    } else if (pathname === '/saved-movies') {
      setMoviesToRender(initialCards);
      setIsShowButtonMoreMovies(false);
    }
  }, [initialCards, numberMoviesToRender]);

  return (
    <section className='moviesCards'>
      <ul className='moviesCards__list'>
        {moviesToRender.map((film) => (
          <MoviesCard key={film.id} film={film} />
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
