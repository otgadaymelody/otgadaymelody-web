import React, { type FC } from 'react';
import GamesMapAddress from './games-map-address/games-map-address';
import './games-map.css';
import { MONTHS, WEEKDAYS } from './games-map.consts';
import { type GameProps } from '../game-registration.interfaces';

const GamesMap: FC<GameProps> = ({ game }): React.ReactElement => {
  const date: Date = new Date(game.gameDate);
  const gameDay: number = date.getDate();
  const gameMonth: string = MONTHS[date.getMonth()];
  const gameDayOfWeek: string = WEEKDAYS[date.getDay()];
  const coordinatesX: number = game.info.coordinates[0];
  const coordinatesY: number = game.info.coordinates[1];
  const price: string = game.gameBasePrice;
  const street: string = game.gameAddress.street;
  const building: string = game.gameAddress.building;

  return (
    <section className="games-map">
      <div className="games-map__container">
        <div className="games-map__address">
          <div className="games-map__address-elements">
            <div className="games-map__address-elements-date">
              <GamesMapAddress icon={false} header={gameDay} text={gameMonth} />
              <GamesMapAddress icon={false} header={game.gameTime} text={gameDayOfWeek} />
            </div>
            <div className="games-map__address-elements-border">
              <GamesMapAddress icon={false} header={`${price} p`} text="C человека" />
            </div>
            <GamesMapAddress
              icon={true}
              header={game.gameLocationName}
              text={`${street}, ${building}`}
            />
          </div>
        </div>
        <div className="games-map__location">
          <iframe
            className="games-map__location-img"
            src={`https://yandex.ru/map-widget/v1/?from=mapframe&ll=${coordinatesY}%2C${coordinatesX}&mode=whatshere&whatshere%5Bpoint%5D=${coordinatesY}%2C${coordinatesX}&whatshere%5Bzoom%5D=17&z=16`}
            height="328"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default GamesMap;
