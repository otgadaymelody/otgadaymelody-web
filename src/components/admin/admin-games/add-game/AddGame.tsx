import React, { type FC, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import BaseButton from '@components/ui/base-button/BaseButton';
import { StepOne } from './add-game-steps/StepOne';
import { StepTwo } from './add-game-steps/StepTwo';
import { StepThree } from './add-game-steps/StepThree';
import { INITIAL_STEPS_DATA, type StepsProps } from './add-game-steps/StepsProps';
import './AddGame.css';

const ADD_GAME_FORM_BTN_CLASSES = {
  buttonForm: 'add-game__btn',
  buttonTitle: 'add-game__btn-title',
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

        {formStep === 1 && (
          <p id="dialogDesc" className="add-game__description">
            Выберите тематику предстоящей игры
          </p>
        )}
        {formStep === 2 && (
          <p id="dialogDesc" className="add-game__description">
            Добавьте название и описание для игры, их увидят игроки в списке предстоящих игр
          </p>
        )}
        {formStep === 3 && (
          <p id="dialogDesc" className="add-game__description">
            Завершите добавление игры
          </p>
        )}
      </div>

      <form className="add-game__form" onSubmit={handleSubmit(onSubmit)}>
        {formStep === 1 && <StepOne control={control} />}
        {formStep === 2 && <StepTwo control={control} />}
        {formStep === 3 && <StepThree formData={formData} />}

        <div className="add-game__controls">
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
            <button className="add-form__cancel-btn">Отменить</button>
          ) : (
            <button className="add-form__cancel-btn" onClick={prevStep}>
              Назад
            </button>
          )}
        </div>
      </form>
    </article>
  );
};

export default AddGame;
