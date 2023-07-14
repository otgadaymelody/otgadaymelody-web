import React, { useState } from 'react';
import './FormRegistration.css';
import '../../ui/input/Input.css';
import Input from '../../ui/input/Input';
import BaseButton from '@components/ui/base-button/BaseButton';

interface FormData {
  teamName: string;
  numPeople: string;
  telNumber: string;
  socialMediaPage: string;
  birthday: string;
}

interface ErrorData {
  teamName: boolean;
  numPeople: boolean;
  telNumber: boolean;
  socialMediaPage: boolean;
  birthday: boolean;
}

interface ErrorMessagesData {
  teamName: string;
  numPeople: string;
  telNumber: string;
  socialMediaPage: string;
  birthday: string;
}

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

    setErrors({
      ...errors,
      [name]: false,
    });

    if (name === 'telNumber' && !+value) {
      setErrors({
        ...errors,
        [name]: true,
      });
      setErrorMessages({
        ...errorMessages,
        [name]: 'Вводите только цифры',
      });
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
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
          placeholder="Название команды "
          onChange={handleChange}
          name="teamName"
          className="input"
          labelClassName="input-label"
          required={true}
          success={true}
        />
        <Input
          value={formData.numPeople}
          type="number"
          placeholder="Кол-во человек в команде "
          onChange={handleChange}
          name="numPeople"
          className="input"
          labelClassName="input-label"
          required={true}
          help="Введите информацию"
        />
      </section>
      <Input
        value={formData.telNumber}
        type="tel"
        placeholder="Номер телефона капитана "
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
        placeholder="Страница капитана в социальных сетях "
        onChange={handleChange}
        name="socialMediaPage"
        className="input"
        labelClassName="input-label"
        required={true}
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
