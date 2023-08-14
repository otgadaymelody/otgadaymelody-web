import React, { useState, type FC } from 'react';
import Input from '@components/ui/input/Input';
import BaseButton from '@components/ui/base-button/BaseButton';
import { type AuthFormData } from './UserAuthForm.inteface';
import axios from 'axios';
import NotificationError from '@components/ui/notifications/notification-error';
import './UserAuthForm.css';

const UserAuthForm: FC = () => {
  const [authFormData, setAuthFormData] = useState<AuthFormData>({
    userEmail: '',
    userPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    axios
      .post('/api/auth', {
        login: authFormData.userEmail,
        password: authFormData.userPassword,
      })
      .then((res) => {
        sessionStorage.setItem('token', res.data.token);
        setErrorMessage('');
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.message);
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setAuthFormData((prevAuthFormData) => ({
      ...prevAuthFormData,
      [name]: value,
    }));
  };

  const userAuthFormBtn = {
    buttonForm: 'form-auth__btn',
    buttonTitle: 'form-auth__btn-title',
  };

  return (
    <>
      {errorMessage !== '' && <NotificationError message={errorMessage} />}
      <h2 className="user-auth__title">Войдите в свою учетную запись</h2>
      <form className="user-auth__form form-auth" onSubmit={handleSubmit}>
        <Input
          value={authFormData.userEmail}
          type="text"
          placeholder="E-mail адрес"
          onChange={handleChange}
          name="userEmail"
          required={false}
          error={false}
        />
        <Input
          value={authFormData.userPassword}
          type="text"
          placeholder="Пароль"
          onChange={handleChange}
          name="userPassword"
          required={false}
          error={false}
        />
        <BaseButton title="Войти" styles={userAuthFormBtn} />
      </form>
    </>
  );
};

export default UserAuthForm;
