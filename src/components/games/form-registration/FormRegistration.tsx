import React, { useEffect, useState } from 'react';
import partyPopper from '@assets/images/pop-up/party-popper.svg';
import './FormRegistration.css';
import '../../ui/input/Input.css';
import Input from '../../ui/input/Input';
import PopUp from '@components/ui/pop-up/pop-up';
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
  validateComment,
} from './registration-validators';
import NotificationError from '@components/ui/notifications/notification-error';
import axios from 'axios';
import {
  INITIAL_FORM_DATA,
  INITIAL_ERRORS_STATE,
  registrationBtnSendClasses,
} from './FormRegistration.consts';

const RegistrationForm = ({ gameId }: { gameId: number }): React.ReactElement => {
  const [errorResponce, setErrorResponce] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [popUpActive, setPopUpActive] = useState(false);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<ErrorData>(INITIAL_ERRORS_STATE);
  const [errorMessages, setErrorMessages] = useState<ErrorMessagesData>(INITIAL_FORM_DATA);

  useEffect(() => {
    const noError = Object.values(errors).every((el) => el === false);
    if (
      noError &&
      formData.teamName &&
      formData.numPeople &&
      formData.telNumber &&
      formData.socialMediaPage
    )
      setButtonDisabled(false);
    else setButtonDisabled(true);
  }, [errors]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    let validationResult: ValidationReturnType = { valid: true, errorMessage: '' };

    setErrors({ ...errors, [name]: false });

    if (name === 'teamName') {
      validationResult = validateTeamName(value);
    } else if (name === 'numPeople') {
      validationResult = validateNumPeople(value);
    } else if (name === 'telNumber') {
      validationResult = validateTelNumber(value);
    } else if (name === 'socialMediaPage') {
      validationResult = validateSocialMediaPage(value);
    } else if (name === 'comment') {
      validationResult = validateComment(value);
    }

    setErrors({ ...errors, [name]: !validationResult.valid });
    setErrorMessages({ ...errorMessages, [name]: validationResult.errorMessage });

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: validationResult.formattedPhoneNumber ?? value,
    }));
  };

  const handleSubmit = (event: any): void => {
    event.preventDefault();
    setErrorResponce('');
    axios
      .post('/api/game-registration/apply', {
        teamName: formData.teamName,
        teamCount: formData.numPeople,
        phoneNumber: formData.telNumber,
        socialLink: formData.socialMediaPage,
        comment: formData.comment,
        gameId: gameId,
      })
      .then((response) => {
        setPopUpActive(true);
      })
      .catch((err) => {
        setErrorResponce(err?.response?.data?.message ?? err);
      });
  };

  const closePopUp = (): void => {
    setPopUpActive(false);
  };

  return (
    <form className="form-registration">
      <div className="server-error">
        {errorResponce && <NotificationError message={errorResponce} />}
      </div>
      {popUpActive && (
        <PopUp
          clickClose={closePopUp}
          title="Поздравляем с регистрацией на игру"
          mainText="Приходите играть и наслаждаться музыкой вместе с нами!"
          noteText="Наш менеджер скоро свяжется с вами по указанному номеру"
          image={partyPopper}
        />
      )}

      <section>
        <h2 className="form-registration__title">Регистрация на игру</h2>
      </section>
      <section className="form-registration-body__firstblock">
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
          value={formData.comment}
          type="text"
          placeholder="Комментарий к заявке"
          onChange={handleChange}
          name="comment"
          className="input date"
          labelClassName="input-label"
          error={errors.comment}
          errorMessage={errorMessages.comment}
        />
        <p className="form-registration-body__description">
          Если в Вашей команде есть именинник (3 дня до и 3 после), пожалуйста, укажите как его
          зовут и мы обязательно поздравим его на мероприятии. Также Вы можете указать любимую
          композицию именинника на поздравление.
        </p>
      </div>
      <BaseButton
        title="Отправить"
        onClick={handleSubmit}
        styles={registrationBtnSendClasses}
        href="#form-registration"
        disabled={buttonDisabled}
      />
      <div>
        <p className="form-registration-body__description">
          <span>Нажимая кнопку «Отправить» я подтверждаю, что согласен c </span>
          <span className="form-registration-body__description-selection">
            <a href={'https://vk.com/otgaday.melody'}>условиями пользовательского соглашения</a>
          </span>
        </p>
      </div>
    </form>
  );
};

export default RegistrationForm;
