import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';

export function useFormValidator() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === 'email') {
      if (!isEmail(value)) {
        e.target.setCustomValidity('Некорректый Email');
      } else {
        e.target.setCustomValidity('');
      }
    }

    if (name === 'name') {
      if (e.target.validity.patternMismatch) {
        e.target.setCustomValidity(
          'поле Имя должно содержать только латиницу, кириллицу, пробел или дефис.',
        );
      } else {
        e.target.setCustomValidity('');
      }
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('.form').checkValidity());
  }

  function resetErrors() {
    setErrors({});
    setValues({});
    setIsValid(false);
  }
  return { values, errors, isValid, resetErrors, handleChange, setValues };
}
