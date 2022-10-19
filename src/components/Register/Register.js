import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { FormValidator } from '../../utils/FormValidator';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput/FormInput';
import LogoLinkConteiner from '../LogoLinkConteiner/LogoLinkConteiner';

const configurationInput = {
  name: {
    minLength: '2',
    maxLength: '40',
  },
  password: {
    minLength: '6',
  },
};

function Register() {
  const { values, isValid, errors, resetErrors, handleChange } = FormValidator({});

  function handleSubmit(evt) {
    evt.preventDefault();
    // props.onSubmit(values);
    resetErrors();
  }

  const linkAuthorization = (
    <p className='form__paragraph'>
      Уже зарегистрированы?{' '}
      <Link className='form__link' to='/signin'>
        Войти
      </Link>
    </p>
  );
  return (
    <main className='register'>
      <LogoLinkConteiner />
      <Form
        title='Добро пожаловать!'
        name='register'
        onSubmit={handleSubmit}
        isDisabled={isValid}
        buttonText='Зарегистрироваться'
        linkAuthorization={linkAuthorization}
      >
        <FormInput
          title='Имя'
          classNameErrors={errors.name}
          value={values.name}
          name='name'
          handleChange={handleChange}
          isValid={isValid}
          config={configurationInput.name}
        />
        <FormInput
          title='E-mail'
          classNameErrors={errors.email}
          value={values.email}
          name='email'
          handleChange={handleChange}
          isValid={isValid}
        />
        <FormInput
          title='Пароль'
          classNameErrors={errors.password}
          value={values.password}
          name='password'
          handleChange={handleChange}
          isValid={isValid}
          config={configurationInput.password}
        />
      </Form>
    </main>
  );
}

export default Register;
