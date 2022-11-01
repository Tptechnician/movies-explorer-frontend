import React from 'react';
import './Form.css';

function Form({
  title,
  onSubmit,
  isDisabled,
  buttonText,
  linkAuthorization,
  styleConfig,
  children,
}) {
  return (
    <section className={`${styleConfig.formConteiner}`}>
      <h3 className={`${styleConfig.title}`}>{title}</h3>
      <form className='form authForm' noValidate>
        {children}
        <button
          className={`${styleConfig.button} ${isDisabled ? styleConfig.buttonActive : ''} `}
          type='button'
          disabled={!isDisabled}
          onClick={onSubmit}
        >
          {buttonText}
        </button>
        {linkAuthorization}
      </form>
    </section>
  );
}

export default Form;
