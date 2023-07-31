import React, { type FC } from 'react';
import GamesMapAddress from './games-map-address/games-map-address';
// import { GAMES_MAP_LIST } from './games-map-address/games-map.consts';
import './games-map.css';

interface GameMapProps {
  gameTime: string | undefined;
  gameDate: string;
  gamePrice: string;
  gameLocationName: string | undefined;
  gameAddressStreet: string;
  gameAddressBuilding: string;
}

const GamesMap: FC<GameMapProps> = ({
  gameTime,
  gameDate,
  gamePrice,
  gameLocationName,
  gameAddressStreet,
  gameAddressBuilding,
}) => {
  const date: Date = new Date(gameDate);
  const gameDay: number = date.getDate();
  let gameMonth: string = '';
  switch (date.getMonth()) {
    case 0:
      gameMonth = 'Янв';
      break;
    case 1:
      gameMonth = 'Фев';
      break;
    case 2:
      gameMonth = 'Мар';
      break;
    case 3:
      gameMonth = 'Апр';
      break;
    case 4:
      gameMonth = 'Май';
      break;
    case 5:
      gameMonth = 'Июнь';
      break;
    case 6:
      gameMonth = 'Июль';
      break;
    case 7:
      gameMonth = 'Авг';
      break;
    case 8:
      gameMonth = 'Сент';
      break;
    case 9:
      gameMonth = 'Окт';
      break;
    case 10:
      gameMonth = 'Ноя';
      break;
    case 11:
      gameMonth = 'Дек';
      break;
  }

  let gameDayOfWeek: string = '';
  switch (date.getDay()) {
    case 0:
      gameDayOfWeek = 'Воскресенье';
      break;
    case 1:
      gameDayOfWeek = 'Понедельник';
      break;
    case 2:
      gameDayOfWeek = 'Вторник';
      break;
    case 3:
      gameDayOfWeek = 'Среда';
      break;
    case 4:
      gameDayOfWeek = 'Четверг';
      break;
    case 5:
      gameDayOfWeek = 'Пятница';
      break;
    case 6:
      gameDayOfWeek = 'Суббота';
      break;
  }

  // (gameMonth === 0) ? 'Янв' :
  // (gameMonth === 1) ? 'Фев' :
  // (gameMonth === 2) ? 'Мар' :
  // (gameMonth === 3) ? 'Апр' :
  // (gameMonth === 4) ? 'Май' :
  // (gameMonth === 5) ? 'Июнь' :
  // (gameMonth === 6) ? 'Июль' :
  // (gameMonth === 7) ? 'Авг' :
  // (gameMonth === 8) ? 'Сент' :
  // (gameMonth === 9) ? 'Окт' :
  // (gameMonth === 10) ? 'Ноя' :
  // (gameMonth === 11) ? 'Дек' : 'Месяц';

  return (
    <section className="games-map">
      <div className="games-map__container">
        <div className="games-map__address">
          <div className="games-map__address-elements">
            <div className="games-map__address-elements-date">
              <GamesMapAddress header={gameDay} text={gameMonth} />
              <GamesMapAddress header={gameTime} text={gameDayOfWeek} />
            </div>
            <div className="games-map__address-elements-border">
              <GamesMapAddress header={`${gamePrice} p`} text="C человека" />
            </div>
            <GamesMapAddress
              header={gameLocationName}
              text={`${gameAddressStreet}, ${gameAddressBuilding}`}
            />
          </div>

          {/* {GAMES_MAP_LIST.map((item, index) => (
            <div key={index} className="games-map__address-elements">
              <div className="games-map__address-elements-date">
                <GamesMapAddress header={item.day.header} text={item.day.text} />
                <GamesMapAddress header={item.time.header} text={item.time.text} />
              </div>
              <div className="games-map__address-elements-border">
                <GamesMapAddress header={item.price.header} text={item.price.text} />
              </div>
              <GamesMapAddress header={item.location.header} text={item.location.text} />
            </div>
          ))} */}
        </div>
        <div className="games-map__location">
          <iframe
            className="games-map__location-img"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aea43418cfa649a01497203b847acaceb80789082548582c57556bcd237af108b&amp;source=constructor"
            height="328"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default GamesMap;
