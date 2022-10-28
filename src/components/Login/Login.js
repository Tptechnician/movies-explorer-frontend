import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { FormValidator } from '../../utils/FormValidator';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput/FormInput';
import LogoLinkConteiner from '../LogoLinkConteiner/LogoLinkConteiner';

const configurationInput = {
  password: {
    minLength: '6',
    type: 'password',
  },
};

const styleConfig = {
  formConteiner: 'form__conteiner',
  title: 'form__title',
  inputWraper: 'form__input-wraper',
  inputTitle: 'form__input-title',
  input: 'form__input',
  inputError: 'form__input_type_error',
  error: 'form__error',
  button: 'form__button form__button_login',
  buttonActive: 'form__button_active',
};

function Login({ onSubmit }) {
  const { values, isValid, errors, resetErrors, handleChange } = FormValidator({});

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
    resetErrors();
  }

  const linkAuthorization = (
    <p className='form__paragraph'>
      Ещё не зарегистрированы?{' '}
      <Link className='form__link' to='/signup'>
        Регистрация
      </Link>
    </p>
  );
  return (
    <main className='auth'>
      <LogoLinkConteiner />
      <Form
        title='Рады видеть!'
        name='login'
        onSubmit={handleSubmit}
        isDisabled={isValid}
        buttonText='Войти'
        linkAuthorization={linkAuthorization}
        styleConfig={styleConfig}
      >
        <FormInput
          title='E-mail'
          textErrors={errors.email}
          value={values.email}
          name='email'
          handleChange={handleChange}
          isValid={isValid}
          styleConfig={styleConfig}
        />
        <FormInput
          title='Пароль'
          textErrors={errors.password}
          value={values.password}
          name='password'
          handleChange={handleChange}
          isValid={isValid}
          config={configurationInput.password}
          styleConfig={styleConfig}
        />
      </Form>
    </main>
  );
}

export default Login;
