import React, { type FC } from 'react';

export const StepThree: FC<any> = ({ formData }) => {
  return (
    <section className="game-form__step">
      <div className="add-game__description_center">
        <p className="add-game__description_active">Почти готово!</p>
        <p className="add-game__description">
          Проверьте всю информацию, которую вы ввели на предыдущих этапах. Если все в порядке,
          нажмите кнопку “Добавить игру” для сохранения информации.
        </p>
      </div>
      <dl className="add-game__result">
        <div>
          <dt>Тематика игры</dt>
          <dd>{formData.gameType}</dd>
        </div>
        <div>
          <dt>Название игры</dt>
          <dd>{formData.gameName}</dd>
        </div>
        <div>
          <dt>Описание игры</dt>
          <dd>{formData.gameDescription}</dd>
        </div>
        <div>
          <dt>Время начала</dt>
          <dd>{formData.gameTime}</dd>
        </div>
        <div>
          <dt>Дата проведения</dt>
          <dd>{formData.gameDate}</dd>
        </div>
        <div>
          <dt>Город</dt>
          <dd>{formData.cityName}</dd>
        </div>
        <div>
          <dt>Адрес</dt>
          <dd>{formData.address}</dd>
        </div>
        <div>
          <dt>Название места проведения</dt>
          <dd>{formData.gameLocationName}</dd>
        </div>
        <div>
          <dt>Количество мест</dt>
          <dd>{formData.maxPlayersCount}</dd>
        </div>
        <div>
          <dt>Стоимость за одного игрока</dt>
          <dd>{formData.priceValue}</dd>
        </div>
        <div>
          <dt>Видна пользователям</dt>
          <dd>{formData.showToUsers ? 'ДА' : 'НЕТ'}</dd>
        </div>
      </dl>
    </section>
  );
};
