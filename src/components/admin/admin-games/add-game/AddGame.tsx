import React, { type FC, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import BaseButton from '@components/ui/base-button/BaseButton';
import { StepOne } from './add-game-steps/StepOne';
import { StepTwo } from './add-game-steps/StepTwo';
import { StepThree } from './add-game-steps/StepThree';
import { INITIAL_STEPS_DATA, type StepsProps } from './add-game-steps/StepsProps';
import './AddGame.css';

const ADD_GAME_FORM_BTN_CLASSES = {
  buttonForm: 'game-form__add-btn',
  buttonTitle: 'game-form__add-btn-title',
};

const AddGame: FC = (): React.ReactElement => {
  const [formStep, setFormStep] = useState<number>(1);
  const [formData, setFormData] = useState<any>();

  const nextStep = (): void => {
    setFormStep((current) => current + 1);
  };

  const prevStep = (): void => {
    setFormStep((current) => current - 1);
  };

  const { handleSubmit, control } = useForm<StepsProps>({
    defaultValues: INITIAL_STEPS_DATA,
  });

  const onSubmit: SubmitHandler<StepsProps> = (data) => {
    setFormData(data);
  };

  function getStepDescription(step: number) {
    switch (step) {
      case 1:
        return (
          <p id="dialogDesc" className="add-game__description">
            Выберите тематику предстоящей игры
          </p>
        );
      case 2:
        return (
          <p id="dialogDesc" className="add-game__description">
            Добавьте название и описание для игры, их увидят игроки в списке предстоящих игр
          </p>
        );
      case 3:
        return (
          <p id="dialogDesc" className="add-game__description">
            Завершите добавление игры
          </p>
        );
    }
  }

  return (
    <article
      role="dialog"
      aria-labelledby="dialogTitle"
      aria-describedby="dialogDesc"
      className="add-game"
    >
      <h2 id="dialogTitle" className="add-game__header">
        Добавить игру
      </h2>
      <div className="add-game__steps">
        <div className="add-game__progress">
          <span>Шаг 1</span>
          <span>Шаг 2</span>
          <span>Шаг 3</span>
        </div>
        {getStepDescription(formStep)}
      </div>

      <form className="add-game__form game-form" onSubmit={handleSubmit(onSubmit)}>
        {formStep === 1 && <StepOne control={control} />}
        {formStep === 2 && <StepTwo control={control} />}
        {formStep === 3 && <StepThree formData={formData} />}

        <div className="game-form__controls">
          {formStep > 2 ? (
            <BaseButton title="Добавить игру" styles={ADD_GAME_FORM_BTN_CLASSES} />
          ) : (
            <BaseButton
              title="Следующий шаг"
              styles={ADD_GAME_FORM_BTN_CLASSES}
              onClick={nextStep}
            />
          )}
          {formStep < 2 ? (
            <button className="game-form__cancel-btn">Отменить</button>
          ) : (
            <button className="game-form__cancel-btn" onClick={prevStep}>
              Назад
            </button>
          )}
        </div>
      </form>
    </article>
  );
};

export default AddGame;
