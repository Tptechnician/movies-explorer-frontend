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
  },
};

function Login() {
  const { values, isValid, errors, resetErrors, handleChange } = FormValidator({});

  function handleSubmit(evt) {
    evt.preventDefault();
    // props.onSubmit(values);
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
        StyleMod='form__button_login'
      >
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

export default Login;
