import React, { type FC } from 'react';
import { Controller } from 'react-hook-form';
import Input from '@components/ui/input/Input';

export const StepOne: FC<any> = ({ control, gameTypes }) => {
  return (
    <section className="game-form__step">
      <Controller
        control={control}
        name="gameType"
        render={({ field: { onChange, value } }) => (
          <select value={value} placeholder="Тематика игры" onChange={onChange} name="gameType">
            <option value="">----------Выбери тематику--------</option>
            {gameTypes
              ? gameTypes.map((gameType: { id: string; gameTypeName: string }) => (
                  <option value={gameType.id} key={gameType.id}>
                    {gameType.gameTypeName}
                  </option>
                ))
              : ''}
          </select>
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
            className="game-form__input"
            name="gameName"
          />
        )}
      />

      <Controller
        control={control}
        name="gameDescription"
        render={({ field: { onChange, value } }) => (
          <textarea
            value={value}
            placeholder="Описание игры"
            onChange={onChange}
            style={{ height: '200px' }}
            className="game-form__input"
            name="gameDescription"
          />
        )}
      />
    </section>
  );
};
