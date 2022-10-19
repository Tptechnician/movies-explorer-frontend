import React from 'react';
import './Form.css';

function Form({ title, onSubmit, isDisabled, buttonText, linkAuthorization, children }) {
  return (
    <section className='form__conteiner'>
      <h3 className='form__title'>{title}</h3>
      <form className='form' noValidate onSubmit={onSubmit}>
        {children}
        <button
          className={`form__button ${isDisabled ? 'form__button_active' : ''}`}
          type='submit'
          disabled={!isDisabled}
        >
          {buttonText}
        </button>
        {linkAuthorization}
      </form>
    </section>
  );
}

export default Form;
