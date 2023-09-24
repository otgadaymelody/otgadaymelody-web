import React, { type FC } from 'react';
import { Controller } from 'react-hook-form';
import Input from '@components/ui/input/Input';

export const StepOne: FC<any> = ({ control }) => {
  return (
    <section className="create-game-form__step">
      <Controller
        control={control}
        name="gameType"
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
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            type="text"
            placeholder="Название игры"
            onChange={onChange}
            name="gameName"
          />
        )}
      />

      <Controller
        control={control}
        name="gameDescription"
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            type="text"
            placeholder="Описание игры"
            onChange={onChange}
            name="gameDescription"
          />
        )}
      />
    </section>
  );
};
