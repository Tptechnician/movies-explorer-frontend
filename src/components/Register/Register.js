import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { useFormValidator } from '../../utils/useFormValidator';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput/FormInput';
import LogoLinkConteiner from '../LogoLinkConteiner/LogoLinkConteiner';

const configurationInput = {
  name: {
    type: 'text',
    minLength: '2',
    maxLength: '40',
    pattern: '[a-zA-Zа-яёА-ЯЁ -]{2,40}',
  },
  password: {
    type: 'password',
    minLength: '6',
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

function Register({ onSubmit }) {
  const { values, isValid, errors, resetErrors, handleChange } = useFormValidator({});

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
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
    <main className='auth'>
      <LogoLinkConteiner />
      <Form
        title='Добро пожаловать!'
        name='register'
        onSubmit={handleSubmit}
        isDisabled={isValid}
        buttonText='Зарегистрироваться'
        linkAuthorization={linkAuthorization}
        styleConfig={styleConfig}
      >
        <FormInput
          title='Имя'
          textErrors={errors.name}
          value={values.name}
          name='name'
          handleChange={handleChange}
          isValid={isValid}
          config={configurationInput.name}
          styleConfig={styleConfig}
        />
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

export default Register;
