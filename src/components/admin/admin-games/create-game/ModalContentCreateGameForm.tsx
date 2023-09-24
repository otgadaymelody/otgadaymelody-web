import React, { type FC, useState, type ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import BaseButton from '@components/ui/base-button/BaseButton';
import { StepOne } from './create-game-steps/StepOne';
import { StepTwo } from './create-game-steps/StepTwo';
import { StepThree } from './create-game-steps/StepThree';
import { INITIAL_STEPS_DATA, type StepsProps } from './create-game-steps/StepsProps';
import closeIcon from '@assets/images/pop-up/close.svg';
import './ModalContentCreateGameForm.css';

interface ModalContentCreateGameFormProps {
  clickCloseModal?: () => void;
}

const CREATE_GAME_FORM_BTN_CLASSES = {
  buttonForm: 'create-game-form__add-btn',
  buttonTitle: 'create-game-form__add-btn-title',
};

const ModalContentCreateGameForm: FC<ModalContentCreateGameFormProps> = ({ clickCloseModal }) => {
  const [formStep, setFormStep] = useState<number>(1);
  const [formData, setFormData] = useState<any>();

  const nextStep = (): void => {
    const valueCurrent = getValues();
    setFormData({ ...formData, ...valueCurrent });
    setFormStep((current) => current + 1);
  };

  const prevStep = (): void => {
    setFormStep((current) => current - 1);
  };

  const { control, formState, getValues } = useForm<StepsProps>({
    defaultValues: INITIAL_STEPS_DATA,
  });

  const onSubmit = (): void => {
    // TODO api request
  };

  function getStepDescription(step: number): ReactNode {
    switch (step) {
      case 1:
        return (
          <p id="dialogDesc" className="create-game__description">
            Выберите тематику игры. Добавьте название и описание: их увидят игроки в списке
            предстоящих игр.
          </p>
        );
      case 2:
        return (
          <p id="dialogDesc" className="create-game__description">
            Заполните основную информацию об игре.
          </p>
        );
      case 3:
        return (
          <p id="dialogDesc" className="create-game__description">
            Завершите добавление игры.
          </p>
        );
    }
  }

  return (
    <section className="modal-content-create-game">
      <article
        role="dialog"
        aria-labelledby="dialogTitle"
        aria-describedby="dialogDesc"
        className="create-game"
      >
        <h2 id="dialogTitle" className="create-game__header">
          Добавить игру
        </h2>
        <div className="create-game__steps">
          <div className="create-game__progress">
            <span>Шаг 1</span>
            <span>Шаг 2</span>
            <span>Шаг 3</span>
          </div>
          {getStepDescription(formStep)}
        </div>

        <form className="create-game-form">
          {formStep === 1 && <StepOne control={control} />}
          {formStep === 2 && <StepTwo control={control} />}
          {formStep === 3 && <StepThree formData={formData} />}

          <div className="create-game-form__controls">
            {formStep > 2 ? (
              <BaseButton
                title="Добавить игру"
                styles={CREATE_GAME_FORM_BTN_CLASSES}
                onClick={(): void => {
                  onSubmit();
                }}
              />
            ) : (
              <BaseButton
                title="Следующий шаг"
                styles={CREATE_GAME_FORM_BTN_CLASSES}
                onClick={nextStep}
              />
            )}
            {formStep < 2 ? (
              <button
                type="button"
                className="create-game-form__cancel-btn"
                onClick={clickCloseModal}
              >
                Отменить
              </button>
            ) : (
              <button type="button" className="create-game-form__cancel-btn" onClick={prevStep}>
                Назад
              </button>
            )}
          </div>
        </form>
      </article>
      <button className="modal-content-create-game__close-btn" onClick={clickCloseModal}>
        <img src={closeIcon} alt="крестик" />
      </button>
    </section>
  );
};

export default ModalContentCreateGameForm;
