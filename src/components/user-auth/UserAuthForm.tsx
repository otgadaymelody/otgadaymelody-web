import React, { useState, type FC } from 'react';
import Input from '@components/ui/input/Input';
import BaseButton from '@components/ui/base-button/BaseButton';
import './UserAuthForm.css';

import { type AuthFormData } from './UserAuthForm.inteface';

const UserAuthForm: FC = () => {
  const [authFormData, setAuthFormData] = useState<AuthFormData>({
    userEmail: '',
    userPassword: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify({ login: '', password: '' }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        sessionStorage.setItem('token', data);
      })
      .catch((err) => console.log(err));

    console.log('отправилось');
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
