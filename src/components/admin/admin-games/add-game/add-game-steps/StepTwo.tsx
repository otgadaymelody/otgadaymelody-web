import React, { type FC } from 'react';
import { Controller } from 'react-hook-form';
import Input from '@components/ui/input/Input';

export const StepTwo: FC<any> = ({ control }) => {
  return (
    <section className="game-form__step">
      <Controller
        control={control}
        name="gameDate"
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            type="date"
            placeholder="Дата проведения"
            onChange={onChange}
            name="gameDate"
          />
        )}
      />

      <Controller
        control={control}
        name="city"
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            type="text"
            placeholder="Город"
            onChange={onChange}
            className="game-form__input"
            name="city"
          />
        )}
      />

      <Controller
        control={control}
        name="streetAndBuilding"
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            type="text"
            placeholder="Адрес"
            onChange={onChange}
            className="game-form__input"
            name="streetAndBuilding"
          />
        )}
      />

      <Controller
        control={control}
        name="gameLocationName"
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            type="text"
            placeholder="Название места проведения"
            onChange={onChange}
            className="add-game__input"
            name="gameLocationName"
          />
        )}
      />
      <span>Например, Бар &quot;Пивзавод&quot;</span>

      <Controller
        control={control}
        name="gameMaxPlayersCount"
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            type="number"
            placeholder="Количество мест"
            onChange={onChange}
            className="add-game__input"
            name="gameMaxPlayersCount"
            min={0}
          />
        )}
      />

      <Controller
        control={control}
        name="gameBasePrice"
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            type="text"
            placeholder="Стоимость за одного игрока"
            onChange={onChange}
            className="add-game__input"
            name="gameBasePrice"
          />
        )}
      />
    </section>
  );
};
