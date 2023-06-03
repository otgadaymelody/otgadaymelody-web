import React, { type FC } from 'react';
import GamesMapAddress from './games-map-address/games-map-address';
import { GAMES_MAP_LIST } from './games-map-address/games-map.consts';
import './games-map.css';

const GamesMap: FC = () => {
  return (
    <section className="games-map">
      <div className="games-map__container">
        <div className="games-map__address">
          {GAMES_MAP_LIST.map((item, index) => (
            <GamesMapAddress key={index} header={item.header} text={item.text}></GamesMapAddress>
          ))}
        </div>
        <div className="games-map__location">
          <iframe
            className="games-map__location-img"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aea43418cfa649a01497203b847acaceb80789082548582c57556bcd237af108b&amp;source=constructor"
            width="620"
            height="328"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default GamesMap;
