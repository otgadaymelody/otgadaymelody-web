import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { type GameDataType } from './GameDataProps';
import { INITIAL_GAME_DATA } from './GameData.consts';
import arrowBack from '@assets/images/admin/arrow-back.svg';
import treeDots from '@assets/images/admin/three-dots.svg';
import './GameData.css';
import NotificationError from '@components/ui/notifications/notification-error';
import { useParams } from 'react-router-dom';

const GameData = (): React.ReactElement => {
  const [gameData, setGameData] = useState<GameDataType>(INITIAL_GAME_DATA);
  const { gameId } = useParams() as { gameId: number | undefined };
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (gameId && Number(gameId)) {
      axios
        .get(`/api/admin/game-info?gameId=${gameId}`)
        .then((res) => {
          setGameData(res.data);
          setErrorMessage('');
        })
        .catch((err) => {
          setErrorMessage(err.messsage);
        });
    } else {
      setErrorMessage('Такая игра не найдена');
    }
  }, []);

  return (
    <>
      {errorMessage !== '' ? (
        <NotificationError message={errorMessage} />
      ) : (
        <div className="game-info__gamedata gamedata">
          <div className="gamedata__top">
            <button className="gamedata__back-btn">
              <img src={arrowBack} alt="стрелка влево" />
            </button>
            <h3 className="game-info__title">Информация об игре</h3>
          </div>
          {!!gameData && (
            <div className="game-info__block">
              <button className="dots-btn">
                <img src={treeDots} alt="три вертикальные точки" />
              </button>
              <div className="gamedata__text_large">{gameData.gameType}</div>
              <div className="gamedata__text_medium">{gameData.gameDate}</div>

              <div className="gamedata__miniblock">
                <div className="gamedata__subtitle">Название игры</div>
                <span className="gamedata__text">{gameData.gameName}</span>
              </div>

              <div className="gamedata__miniblock">
                <div className="gamedata__subtitle">Описание игры</div>
                <span className="gamedata__text">Здесь будет описание</span>
              </div>

              <div className="gamedata__miniblock">
                <div className="gamedata__subtitle">Место проведения</div>
                <div className="gamedata__text">{gameData.gameLocationName}</div>
                <span className="gamedata__text">
                  {gameData.gameAddress.street}, {gameData.gameAddress.building}
                </span>
              </div>

              <div className="gamedata__miniblock">
                <div className="gamedata__subtitle">Стоимость за одного игрока</div>
                <span className="gamedata__text">
                  {gameData.gameBasePrice} {gameData.gameCurrencyPrice}
                </span>
              </div>

              <div className="gamedata__miniblock">
                <div className="gamedata__subtitle">Мест на игре</div>
                <progress id="seats-progress" value={0.25}></progress>{' '}
                <span className="gamedata__text">
                  {gameData.adminInfo.playersConfirmedCount} /{' '}
                  {gameData.adminInfo.gameMaxPlayersCount}
                </span>
              </div>

              <div className="gamedata__miniblock">
                <div className="gamedata__subtitle">Зарегистрировано</div>
                <div className="gamedata__text">
                  <span>
                    {gameData.adminInfo.teamsConfirmedCount} команд{' '}
                    {gameData.adminInfo.playersConfirmedCount} человек
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default GameData;
