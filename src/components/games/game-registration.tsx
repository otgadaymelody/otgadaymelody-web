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
import { INITIAL_API_DATA } from './game-registration.consts';

const GameRegistration: FC = () => {
  const { gameId } = useParams() as { gameId: number | undefined };
  const [error, setError] = useState('');
  const [apiData, setApiData] = useState<GameData>(INITIAL_API_DATA);

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
        <section className="games-registration__wrapper">
          <div className="games-registration__mapregistration-container">
            <div className="games-registration__registration-container">
              <GamesBanner game={apiData}></GamesBanner>
              <Description></Description>
            </div>
            <div className="games-registration__map-container">
              <GamesMap game={apiData}></GamesMap>
              <RegistrationForm gameId={gameId ?? 0}></RegistrationForm>
            </div>
          </div>
          <PhotoGallery className="games-registration__photo-container"></PhotoGallery>
          <div className="games-registration__block-container">
            <PhotoNearBorderLeft></PhotoNearBorderLeft>
            <FAQBlock className="games-registration__block-faqpart"></FAQBlock>
          </div>
        </section>
      )}
    </>
  );
};

export default GameRegistration;
