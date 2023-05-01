import React, { type FC, useState } from 'react';
import './FormRegistration.css';
import './input/Input.css';
import Input from './input/Input';
import BaseButton from '@components/ui/base-button/BaseButton';
import GameInformationBanner from '@components/upcoming-game/game-information-banner/GameInformationBanner';

const RegistrationForm: React.FC /* <RegistrationFormProps> */ = () => {
  const [teamName, setTeamName] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [telNumber, setTelNumber] = useState('');
  const [socialMediaPage, setSocialMediaPage] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleTeamNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTeamName(event.target.value);
  };

  const handleNumPeopleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNumPeople(event.target.value);
  };

  const handleTelNumberChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTelNumber(event.target.value);
  };

  const handleSocialMediaPageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSocialMediaPage(event.target.value);
  };

  const handleBirthdayChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setBirthday(event.target.value);
  };

  return (
    <form className="form-registration">
      <h2 className="form-registration__title">Регистрация на игру</h2>
      <div className="form-registartion-body">
        <div className="form-registartion-body__firstblock">
          <Input
            value={teamName}
            type="text"
            placeholder="Название команды *"
            onChange={handleTeamNameChange}
            className="input"
          />
          <Input
            value={numPeople}
            type="number"
            /* max={8} */
            placeholder="Кол-во человек в команде *"
            onChange={handleNumPeopleChange}
            className="input"
          />
        </div>
        <Input
          value={telNumber}
          type="tel"
          placeholder="Номер телефона капитана *"
          onChange={handleTelNumberChange}
          className="input"
        />
        <Input
          value={socialMediaPage}
          placeholder="Страница капитана в социальных сетях *"
          onChange={handleSocialMediaPageChange}
          className="input"
        />
        <div>
          <Input
            value={birthday}
            type="date"
            placeholder="День рождение"
            onChange={handleBirthdayChange}
            className="input"
          />
          <p>
            Если в Вашей команде есть именинник (3 дня до и 3 после), пожалуйста, укажите как его
            зовут и мы обязательно поздравим его на мероприятии. Также Вы можете указать любимую
            композицию именинника на поздравление.
          </p>
        </div>
        <BaseButton className="base-btn__send" title="Отправить" />
        <div>
          <p>
            <span>Нажимая кнопку «Отправить» я подтверждаю что согласен c </span>
            <span className="form-registartion-body__span">
              условиями пользовательского соглашения
            </span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
