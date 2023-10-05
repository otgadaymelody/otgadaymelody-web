import React, { type FC } from 'react';
import { Controller } from 'react-hook-form';
import Input from '@components/ui/input/Input';

export const StepTwo: FC<any> = ({ control, locations }) => {
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
        name="gameTime"
        render={({ field: { onChange, value } }) => (
          <Input
            value={value ?? '19:00'}
            type="text"
            placeholder="время начала, например 19:00"
            onChange={onChange}
            className="game-form__input"
            name="gameTime"
          />
        )}
      />

      <div>
        <Controller
          control={control}
          name="gameLocationName"
          render={({ field: { onChange, value } }) => (
            <select
              defaultChecked={false}
              value={value}
              placeholder="Название места проведения"
              onChange={onChange}
              name="gameLocationName"
              style={{ minWidth: '200px' }}
            >
              <option value="">--Выбери место--</option>
              {locations
                ? locations.map((location: { id: string; locationName: string }) => (
                    <option value={location.locationName} key={location.id}>
                      {location.locationName}
                    </option>
                  ))
                : ''}
            </select>
          )}
        />
        <span className="game-form__example">Например, Бар &quot;Пивзавод&quot;</span>
      </div>

      <Controller
        control={control}
        name="cityName"
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            type="text"
            placeholder="Город"
            onChange={onChange}
            className="game-form__input"
            name="cityName"
          />
        )}
      />

      <Controller
        control={control}
        name="address"
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            type="text"
            placeholder="Адрес"
            onChange={onChange}
            className="game-form__input"
            name="address"
          />
        )}
      />
      <div className="game-form__step_innerblock">
        <Controller
          control={control}
          name="maxPlayersCount"
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              type="number"
              placeholder="Количество мест"
              onChange={onChange}
              className="add-game__input"
              name="maxPlayersCount"
              min={0}
            />
          )}
        />

        <Controller
          control={control}
          name="priceValue"
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              type="text"
              placeholder="Стоимость за одного игрока"
              onChange={onChange}
              className="add-game__input"
              name="priceValue"
            />
          )}
        />

        <Controller
          control={control}
          name="showToUsers"
          render={({ field: { onChange, value } }) => (
            <label htmlFor="check-field">
              ВИДНА ПОЛЬЗОВАТЕЛЯМ!
              <input
                id="check-field"
                checked={value}
                type="checkbox"
                onChange={onChange}
                className="add-game__input"
                name="showToUsers"
              />
            </label>
          )}
        />
      </div>
    </section>
  );
};
