import React, { useState } from 'react';
import './FormRegistration.css';
import '../../ui/input/Input.css';
import Input from '../../ui/input/Input';
import BaseButton from '@components/ui/base-button/BaseButton';
import {
  type FormData,
  type ErrorData,
  type ErrorMessagesData,
} from './FormRegistration.interfaces';
import {
  type ValidationReturnType,
  validateTeamName,
  validateNumPeople,
  validateTelNumber,
  validateSocialMediaPage,
  validateBirthday,
} from './registration-validators';
import NotificationError from '@components/ui/notifications/notification-error';
import axios from 'axios';

const RegistrationForm = (): React.ReactElement => {
  // const [errorNotification, setErrorNotification] = useState(false);
  const [errorResponce, setErrorResponce] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  // let disableButton: boolean = true;

  const [formData, setFormData] = useState<FormData>({
    teamName: '',
    numPeople: '',
    telNumber: '',
    socialMediaPage: '',
    birthday: '',
  });

  const [errors, setErrors] = useState<ErrorData>({
    teamName: false,
    numPeople: false,
    telNumber: false,
    socialMediaPage: false,
    birthday: false,
  });

  const [errorMessages, setErrorMessages] = useState<ErrorMessagesData>({
    teamName: '',
    numPeople: '',
    telNumber: '',
    socialMediaPage: '',
    birthday: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setButtonDisabled(false);
    setErrors({ ...errors, [name]: false });
    let validationResult: ValidationReturnType = { valid: true, errorMessage: '' };

    if (name === 'teamName') {
      validationResult = validateTeamName(value);
    } else if (name === 'numPeople') {
      validationResult = validateNumPeople(value);
    } else if (name === 'telNumber') {
      validationResult = validateTelNumber(value);
    } else if (name === 'socialMediaPage') {
      validationResult = validateSocialMediaPage(value);
    } else if (name === 'birthday') {
      validationResult = validateBirthday(value);
    }

    setErrors({ ...errors, [name]: !validationResult.valid });
    setErrorMessages({ ...errorMessages, [name]: validationResult.errorMessage });

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: validationResult.formattedPhoneNumber ?? value,
    }));
  };

  const postInfo = (): void => {
    setErrorResponce('');
    axios
      .post('/api/game-registration/apply', {
        teamName: formData.teamName,
        teamCount: formData.numPeople,
        phoneNumber: formData.telNumber,
        socialLink: formData.socialMediaPage,
        birthDate: formData.birthday,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        setErrorResponce(err.message);
      });
  };

  const handleSubmit = (event: any): void => {
    event.preventDefault();
    setButtonDisabled(false);
    const noError = Object.values(errors).every((el) => el === false);

    if (noError) {
      // console.log(formData);
      postInfo();
    } else {
      setButtonDisabled(true);
    }
  };

  const registrationBtnSendClasses = {
    buttonForm: 'form-registration__btn-send',
    buttonTitle: 'form-registration__btn-send-title',
  };

  return (
    <form className="form-registration">
      {/* перенести куда то на страницу ответ от сервера с ошибкой */}
      {errorResponce && <NotificationError message={errorResponce} />}

      <section>
        <h2 className="form-registration__title">Регистрация на игру</h2>
      </section>
      <section className="form-registartion-body__firstblock">
        <Input
          value={formData.teamName}
          type="text"
          placeholder="Название команды"
          onChange={handleChange}
          name="teamName"
          className="input"
          labelClassName="input-label"
          required={true}
          error={errors.teamName}
          errorMessage={errorMessages.teamName}
        />
        <Input
          value={formData.numPeople}
          type="number"
          placeholder="Кол-во человек в команде"
          onChange={handleChange}
          name="numPeople"
          className="input"
          labelClassName="input-label"
          required={true}
          error={errors.numPeople}
          errorMessage={errorMessages.numPeople}
          min={2}
          max={10}
        />
      </section>
      <Input
        value={formData.telNumber}
        type="tel"
        placeholder="Номер телефона капитана"
        onChange={handleChange}
        name="telNumber"
        className="input"
        labelClassName="input-label"
        required={true}
        error={errors.telNumber}
        errorMessage={errorMessages.telNumber}
      />
      <Input
        value={formData.socialMediaPage}
        placeholder="Страница капитана в социальных сетях"
        onChange={handleChange}
        name="socialMediaPage"
        className="input"
        labelClassName="input-label"
        required={true}
        error={errors.socialMediaPage}
        errorMessage={errorMessages.socialMediaPage}
      />
      <div>
        <Input
          value={formData.birthday}
          type="date"
          placeholder="День рождения"
          onChange={handleChange}
          name="birthday"
          className="input date"
          labelClassName="input-label"
          error={errors.birthday}
          errorMessage={errorMessages.birthday}
        />
        <p className="form-registartion-body__description">
          Если в Вашей команде есть именинник (3 дня до и 3 после), пожалуйста, укажите как его
          зовут и мы обязательно поздравим его на мероприятии. Также Вы можете указать любимую
          композицию именинника на поздравление.
        </p>
      </div>
      <BaseButton
        title="Отправить"
        onClick={handleSubmit}
        styles={registrationBtnSendClasses}
        href="#form-registartion"
        disabled={buttonDisabled}
      />
      <div>
        {buttonDisabled && <NotificationError message="Неверно заполнены поля" />}

        <p className="form-registartion-body__description">
          <span>Нажимая кнопку «Отправить» я подтверждаю, что согласен c </span>
          <span className="form-registartion-body__description-selection">
            условиями пользовательского соглашения
          </span>
        </p>
      </div>
    </form>
  );
};

export default RegistrationForm;
