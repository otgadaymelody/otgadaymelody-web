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

interface ValidationReturnType {
  valid: boolean;
  errorMessage: string;
  formattedPhoneNumber?: string;
}

const validateTeamName = (value: string): ValidationReturnType => {
  const validationName = /^[а-яА-Яa-zA-Z\s]+$/.test(value);
  if (!validationName) {
    return {
      valid: false,
      errorMessage: 'Недопустимые символы',
    };
  }
  return {
    valid: true,
    errorMessage: '',
  };
};

const validateNumPeople = (value: string): ValidationReturnType => {
  const numPeople = parseInt(value, 10);
  if (isNaN(numPeople) || numPeople < 2 || numPeople > 10) {
    return {
      valid: false,
      errorMessage: 'Количество человек в команде должно быть от 2 до 10',
    };
  }
  return {
    valid: true,
    errorMessage: '',
  };
};
const validateTelNumber = (value: string): ValidationReturnType => {
  const phoneNumber = value.replace(/[^\d]/g, '');

  const phoneCheck = /^\+?([0-9]|\(|\)|\s)+$/.test(value);
  if (!phoneCheck) {
    return {
      valid: false,
      errorMessage: 'Вводите только цифры',
    };
  }
  let formattedPhoneNumber = '+7(';
  if (phoneNumber.length >= 1) {
    if (phoneNumber.slice(1, 4) !== '') {
      formattedPhoneNumber += `${phoneNumber.slice(1, 4)}`;
    }
  }
  if (phoneNumber.length >= 4) {
    if (phoneNumber.slice(4, 7) !== '') {
      formattedPhoneNumber += `) ${phoneNumber.slice(4, 7)}`;
    }
  }

  if (phoneNumber.length >= 7) {
    if (phoneNumber.slice(7, 9) !== '') {
      formattedPhoneNumber += ` ${phoneNumber.slice(7, 9)}`;
    }
  }
  if (phoneNumber.length >= 9) {
    if (phoneNumber.slice(9, 11) !== '') {
      formattedPhoneNumber += ` ${phoneNumber.slice(9, 11)}`;
    }
  }
  return {
    valid: true,
    errorMessage: '',
    formattedPhoneNumber,
  };
};

const validateSocialMediaPage = (value: string): ValidationReturnType => {
  if (value.length > 250) {
    return {
      valid: false,
      errorMessage: 'Слишком большая ссылка',
    };
  }
  return {
    valid: true,
    errorMessage: '',
  };
};

const validateBirthday = (value: string): ValidationReturnType => {
  const today = new Date();
  const selectedDate = new Date(value);
  const age = today.getFullYear() - selectedDate.getFullYear();
  if (isNaN(selectedDate.getTime()) || age > 120 || age < 16) {
    return {
      valid: false,
      errorMessage: 'Неверный формат',
    };
  }
  return {
    valid: true,
    errorMessage: '',
  };
};

const RegistrationForm = (): React.ReactElement => {
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

  const registrationBtnSendClasses = {
    buttonForm: 'form-registration__btn-send',
    buttonTitle: 'form-registration__btn-send-title',
  };

  return (
    <form className="form-registration">
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
      <BaseButton title="Отправить" styles={registrationBtnSendClasses} href="#form-registartion" />
      <div>
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
