import React from 'react';
import './FormInput.css';

function FormInput({ title, textErrors, value, name, handleChange, isValid, config, styleConfig }) {
  return (
    <label className={`${styleConfig.inputWraper}`}>
      <h6 className={`${styleConfig.inputTitle}`}>{title}</h6>
      <input
        className={`${styleConfig.input} ${textErrors ? styleConfig.inputError : ''}`}
        value={value || ''}
        name={name}
        {...config}
        required
        onChange={handleChange}
      />
      <p className={`${styleConfig.error}`}>{isValid ? '' : textErrors}</p>
    </label>
  );
}

export default FormInput;
