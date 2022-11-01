import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import { ReactComponent as SearchFormIcon } from '../../images/searchform-icon.svg';
import { useFormValidator } from '../../utils/useFormValidator';

function SearchForm({ formValid, textError, onSearch, onCheckbox, checkbox, inputValue }) {
  const { values, isValid, handleChange, setValues } = useFormValidator({});

  function handleSubmit(e) {
    e.preventDefault();
    if (values.search) {
      formValid(true);
      onSearch(values.search, checkbox);
    } else {
      formValid(isValid);
      textError('Нужно ввести ключевое слово');
    }
  }

  useEffect(() => {
    setValues({ search: inputValue });
  }, [inputValue, setValues]);

  return (
    <form className='form searchForm' noValidate>
      <div className='searchForm__coteiner'>
        <div className='searchForm__coteiner-input'>
          <SearchFormIcon className='searchForm__icon' />
          <input
            className='searchForm__input'
            placeholder='Фильм'
            name='search'
            type='text'
            value={values.search || ''}
            onChange={handleChange}
            required
          />
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
            onChange={onCheckbox}
          />
          <span className='searchForm__slider' />
        </label>
        <p className='searchForm__films'>Короткометражки</p>
      </div>
    </form>
  );
}

export default SearchForm;
