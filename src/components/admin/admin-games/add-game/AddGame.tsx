import React, { useState } from 'react';
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import Input from '@components/ui/input/Input';
import BaseButton from '@components/ui/base-button/BaseButton';
import './AddGame.css';

interface IAddGameValues {
  gameType: string;
  gameName: string;
  gameDescription: string;
}

const ADD_GAME_FORM_BTN_CLASSES = {
  buttonForm: 'add-game__btn',
  buttonTitle: 'add-game__btn-title',
};

const AddGame = (): React.ReactElement => {
  //   const [formStep, setFormStep] = useState(0);

  //   const [addGameValues, setAddGameValues] = useState<IAddGameValues>({
  //     gameType: '',
  //     gameName: '',
  //     gameDescription: '',
  //   });

  const { handleSubmit, control } = useForm<IAddGameValues>();

  const onSubmit: SubmitHandler<IAddGameValues> = (data) => {
    console.log(data);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="dialogTitle"
      aria-describedby="dialogDesc"
      className="add-game"
    >
      <h2 id="dialogTitle" className="add-game__header">
        Добавить игру
      </h2>
      <div className="add-game__steps">
        <span>Шаг 1</span>
        <span>Шаг 2</span>
        <span>Шаг 3</span>
        <p id="dialogDesc">Выберите тематику предстоящей игры</p>
      </div>

      <form className="add-game__form" onSubmit={handleSubmit(onSubmit)}>
        {/* {formStep === 0 && ( */}
        <section className="add-game__step_one">
          <Controller
            control={control}
            name="gameType"
            // rules={{
            //   required: true,
            // }}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                type="text"
                placeholder="Тематика игры"
                onChange={onChange}
                name="gameType"
              />
            )}
          />

          <Controller
            control={control}
            name="gameName"
            // rules={{
            //   required: true,
            // }}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                type="text"
                placeholder="Название игры"
                onChange={onChange}
                className="add-game__input"
                name="gameName"
              />
            )}
          />

          <Controller
            control={control}
            name="gameDescription"
            // rules={{
            //   required: true,
            // }}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                type="text"
                placeholder="Описание игры"
                onChange={onChange}
                className="add-game__input"
                name="gameDescription"
              />
            )}
          />
        </section>
        {/* )} */}
        <button type="submit">test submit</button>
      </form>
      <div className="add-game__controls">
        <BaseButton title="Следующий шаг" styles={ADD_GAME_FORM_BTN_CLASSES} />

        <button className="add-form__cancel-btn">Отменить</button>
      </div>
    </div>
  );
};

export default AddGame;
