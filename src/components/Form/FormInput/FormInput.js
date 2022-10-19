import React from 'react';
import './FormInput.css';

function FormInput({ title, classNameErrors, value, name, handleChange, isValid, config }) {
  return (
    <label className='form__input-wraper'>
      <h6 className='form__input-title'>{title}</h6>
      <input
        className={`form__input ${classNameErrors ? 'form__input_type_error' : ''}`}
        value={value || ''}
        name={name}
        {...config}
        required
        onChange={handleChange}
      />
      <p className='form__error'>{isValid ? '' : classNameErrors}</p>
    </label>
  );
}

export default FormInput;
