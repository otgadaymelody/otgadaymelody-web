import React, { type FC, useEffect, useState } from 'react';
import './game-registration.css';
import RegistrationForm from './form-registration/FormRegistration';
import GamesBanner from './games-banner/games-banner';
import Description from './description/description';
import GamesMap from './games-map/games-map';
import FAQBlock from '../faq-block/FAQBlock';
import PhotoNearBorderLeft from './PhotoNearBorderLeft/PhotoNearBorderLeft';
import PhotoGallery from '@components/photo-gallery/PhotoGallery';
import NotificationError from '@components/ui/notifications/notification-error';
import axios from 'axios';
import { type GameData } from './game-registration.interfaces';
import { useParams } from 'react-router-dom';

const GameRegistration: FC = () => {
  const { gameId } = useParams() as { gameId: number | undefined };
  const [error, setError] = useState('');

  const [apiData, setApiData] = useState<GameData>({
    id: 0,
    gameName: '',
    gameType: '',
    gameDate: '',
    gameTime: '',
    gameLocationName: '',
    franchiseeId: 0,
    gameAddress: {
      city: '',
      street: '',
      building: '',
    },
    gameCityName: '',
    gameBasePrice: '',
    gameCurrencyPrice: '',
    gameCityId: 0,
    info: {
      description: '',
      imageSrc: '',
      coordinates: [],
    },
  });

  useEffect(() => {
    if (gameId && Number(gameId)) {
      axios
        .get(`/api/game-registration?gameId=${gameId}`)
        .then((res) => {
          setError('');
          setApiData(res.data);
        })
        .catch((err) => {
          setError(err.message);
        });
    } else {
      setError('Такая игра не найдена');
    }
  }, []);

  return (
    <>
      {error !== '' ? (
        <NotificationError message={error} />
      ) : (
        <section className="games-main__container">
          <div className="games-main__mapregistration-container">
            <div className="games-main__registration-container">
              <GamesBanner game={apiData}></GamesBanner>
              <RegistrationForm></RegistrationForm>
            </div>
            <div className="games-main__map-container">
              <GamesMap game={apiData}></GamesMap>
              <Description></Description>
            </div>
          </div>
          <div className="games-main__block-container">
            <PhotoGallery className="gamesmain__photo-container"></PhotoGallery>
          </div>
          <div className="games-main__block-container">
            <PhotoNearBorderLeft></PhotoNearBorderLeft>
            <FAQBlock className="games-main__block-faqpart"></FAQBlock>
          </div>
        </section>
      )}
    </>
  );
};

export default GameRegistration;
