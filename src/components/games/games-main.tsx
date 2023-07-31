import React, { type FC, useEffect, useState } from 'react';
import './games-main.css';
import RegistrationForm from './form-registration/FormRegistration';
import GamesBanner from './games-banner/games-banner';
import Description from './description/description';
import GamesMap from './games-map/games-map';
import FAQBlock from '../faq-block/FAQBlock';
import PhotoNearBorderItem from './PhotoNearBorderItem/PhotoNearBorderItem';
import ImageUrl from '../../assets/images/image-vector/gamesmain__imagevector-block-img-first.png';
import VectorUrl from '../../assets/images/image-vector/Vector 37.png';
import axios from 'axios';

const GamesMain: FC = () => {
  // interface GameData {
  //   gameName: string;
  // }
  interface GameData {
    id?: number;
    gameName?: string;
    gameType?: string;
    gameDate: string;
    gameTime?: string;
    gameLocationName?: string;
    franchiseeId?: number;
    gameAddress: {
      city?: string;
      street: string;
      building: string;
    };
    gameCityName?: string;
    gameBasePrice: string;
    gameCurrencyPrice?: string;
    gameCityId?: number;
    info: {
      description: string;
      imageSrc?: string;
      coordinates?: number[];
    };
  }

  // const [apiData, setApiData] = useState<string[]>([]);
  const [apiData, setApiData] = useState<GameData>({
    gameName: '',
    gameDate: '',
    gameBasePrice: '',
    gameAddress: {
      city: '',
      street: '',
      building: '',
    },
    info: {
      description: '',
    },
  });

  useEffect(() => {
    axios
      .get('api/game-registration?gameId=3')
      .then((res) => {
        console.log(res.data);
        setApiData(res.data);
        console.log(apiData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="gamesmain__container">
      <div className="gamesmain__mapregistartion-container">
        <div className="gamesmain__registartion-container">
          <GamesBanner
            gameTitle={apiData.gameName}
            gameInfo={apiData.info.description}
          ></GamesBanner>
          <RegistrationForm></RegistrationForm>
        </div>
        <div className="gamesmain__map-container">
          <GamesMap
            gameTime={apiData.gameTime}
            gameDate={apiData.gameDate}
            gamePrice={apiData.gameBasePrice}
            gameLocationName={apiData.gameLocationName}
            gameAddressStreet={apiData.gameAddress.street}
            gameAddressBuilding={apiData.gameAddress.building}
          ></GamesMap>
          <Description></Description>
        </div>
      </div>
      <div className="gamesmain__block-container">
        <PhotoNearBorderItem
          game="game1"
          className="gamesmain__block-imagepart-container"
          ImageUrl={ImageUrl}
          VectorUrl={VectorUrl}
          ImageClassName="gamesmain__block-imagepart-image"
          VectorClassName="gamesmain__block-imagepart-vector"
        ></PhotoNearBorderItem>
        <FAQBlock className="gamesmain__block-faqpart"></FAQBlock>
      </div>
    </section>
  );
};

export default GamesMain;

// useEffect(() => {
//   const fetchData = async () => {
//     // const res = await axios.get('api/game-registration?gameId=3');
//     // setApiData(res.data);
//     try {
//       const res = await axios.get('api/game-registration?gameId=3');
//       console.log(res.data);
//       setApiData(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   fetchData();
// }, []);

// useEffect(() => {
//   api
//     .getGameForRegistration()
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }, []);

// useEffect(() => {
//   fetch('api/game-registration?gameId=3')
//     .then(async (res) => {
//       return await res.json();
//     })
//     .then((game) => {
//       console.log(game);
//       handleData(game.gameName);
//       // setGameData({
//       //   ...gameData,
//       //   [gameData.gameName]: game.gameName,
//       // });
//       return game;
//     })
//     .catch((err) => console.log(err));
// }, []);

// const handleData = (game: string): void => {
//   setGameData({
//     ...gameData,
//     [gameData.gameName]: game,
//   });
//   // gameName = game;
//   // console.log(gameName);
// };
