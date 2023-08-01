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
  gameCoordinates: number[];
}

const GamesMap: FC<GameMapProps> = ({
  gameTime,
  gameDate,
  gamePrice,
  gameLocationName,
  gameAddressStreet,
  gameAddressBuilding,
  gameCoordinates,
}) => {
  const date: Date = new Date(gameDate);

  const gameDay: number = date.getDate();

  let gameMonth: string = '';
  const monthsRu = [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ];
  gameMonth = monthsRu[date.getMonth()];

  let gameDayOfWeek: string = '';
  const dayRussian = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  gameDayOfWeek = dayRussian[date.getDay()];

  const coordinatesX: number = gameCoordinates[0];
  const coordinatesY: number = gameCoordinates[0];

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
          {/* <iframe
            className="games-map__location-img"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aea43418cfa649a01497203b847acaceb80789082548582c57556bcd237af108b&amp;source=constructor"
            height="328"
          ></iframe> */}
          <iframe
            className="games-map__location-img"
            src={`https://yandex.ru/map-widget/v1/?from=mapframe&ll=${coordinatesY}%2C${coordinatesX}&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njk4Mjg1NBJO0KDQvtGB0YHQuNGPLCDQndC40LbQvdC40Lkg0J3QvtCy0LPQvtGA0L7QtCwg0JfQtdC70LXQvdGB0LrQuNC5INGB0YrQtdC30LQsIDEwIgoNefwvQhVPUWFC&source=mapframe&utm_source=mapframe&z=14.73`}
            height="328"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default GamesMap;
