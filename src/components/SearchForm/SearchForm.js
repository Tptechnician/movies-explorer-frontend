import React, { useState } from 'react';
import './SearchForm.css';
import { ReactComponent as SearchFormIcon } from '../../images/searchform-icon.svg';

function SearchForm() {
  const [checkbox, setСheckbox] = useState(false);
  console.log(checkbox);
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Поиск фильма сработал');
  }

  function handleСheckboxChange() {
    const newСheckbox = !checkbox;
    setСheckbox(newСheckbox);
    console.log(`Сheckbox сработал: ${checkbox}`);
  }

  return (
    <form className='searchForm'>
      <div className='searchForm__coteiner'>
        <div className='searchForm__coteiner-input'>
          <SearchFormIcon />
          <input className='searchForm__input' placeholder='Фильм' type='text' required />
        </div>
        <button className='searchForm__button' type='submit' onClick={handleSubmit}>
          Найти
        </button>
      </div>
      <div className='searchForm__coteiner-checkbox'>
        <label className='searchForm__tumbler'>
          <input
            className='searchForm__checkbox'
            type='checkbox'
            value={checkbox}
            checked={checkbox}
            onChange={handleСheckboxChange}
          />
          <span className='searchForm__slider' />
        </label>
        <p className='searchForm__films'>Короткометражки</p>
      </div>
    </form>
  );
}

export default SearchForm;
