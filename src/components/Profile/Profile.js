import React, { useEffect, useState } from 'react';
import './Profile.css';
import { FormValidator } from '../../utils/FormValidator';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput/FormInput';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const configurationInput = {
  name: {
    minLength: '2',
    maxLength: '40',
  },
  password: {
    minLength: '6',
  },
};

const styleConfig = {
  formConteiner: 'form__conteiner form__conteiner_profile',
  title: 'form__title form__title_profile',
  inputWraper: 'form__input-wraper form__input-wraper_profile',
  inputTitle: 'form__input-title form__input-title_profile',
  input: 'form__input form__input_profile',
  inputError: 'form__input_type_error_profile',
  error: 'form__error form__error_profile',
  button: 'form__button form__button_profile',
  buttonActive: 'form__button_active_profile',
};

function Profile({ loggedOut, updateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, isValid, errors, resetErrors, handleChange, setValues } = FormValidator({});

  function handleSubmit(e) {
    e.preventDefault();
    updateUser(values);
    resetErrors();
  }

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [currentUser]);

  const linkAuthorization = (
    <button className='form__button__login-out' onClick={loggedOut}>
      Выйти из аккаунта
    </button>
  );

  return (
    <main className='auth auth_profile'>
      <Form
        title={`Привет, ${currentUser.name}!`}
        name='login'
        onSubmit={handleSubmit}
        isDisabled={isValid}
        buttonText='Редактировать'
        linkAuthorization={linkAuthorization}
        styleConfig={styleConfig}
      >
        <FormInput
          title='Имя'
          textErrors={errors.name}
          value={values.name || ''}
          name='name'
          handleChange={handleChange}
          isValid={isValid}
          config={configurationInput.name}
          styleConfig={styleConfig}
        />
        <FormInput
          title='E-mail'
          textErrors={errors.email}
          value={values.email || ''}
          name='email'
          handleChange={handleChange}
          isValid={isValid}
          styleConfig={styleConfig}
        />
      </Form>
    </main>
  );
}

export default Profile;
