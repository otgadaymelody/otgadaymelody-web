import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { type GameDataType } from './GameDataProps';
import { INITIAL_GAME_DATA } from './GameData.consts';
import arrowBack from '@assets/images/admin/arrow-back.svg';
import treeDots from '@assets/images/admin/three-dots.svg';
import './GameData.css';
import NotificationError from '@components/ui/notifications/notification-error';
import { useNavigate, useParams } from 'react-router-dom';
import { type GameAdmin } from '../../admin-games-table/AdminGamesTableProps';
import DropDownMenu from '@components/ui/drop-down-menu/DropDownMenu';

const GameData = (): React.ReactElement => {
  const [gameData, setGameData] = useState<GameAdmin>(INITIAL_GAME_DATA);
  const { gameId } = useParams() as { gameId: number | undefined };
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const [isDropDownVisible, setisDropDownVisible] = useState(false);

  const handleClickDropDown = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
      setisDropDownVisible(!isDropDownVisible);
      e.stopPropagation();
    },
    [isDropDownVisible],
  );

  useEffect(() => {
    if (gameId) {
      axios
        .get(`/api/admin/game/action/${gameId}`)
        .then((res) => {
          setGameData(res.data.response);
          setErrorMessage('');
        })
        .catch((err) => {
          setErrorMessage(err.messsage);
        });
    }
  }, []);

  const toNavigate = useCallback(() => {
    navigate(`/admin`);
  }, []);

  return (
    <>
      <div className="game-info__gamedata gamedata">
        <div className="gamedata__top">
          <button className="gamedata__back-btn" onClick={toNavigate}>
            <img src={arrowBack} alt="стрелка влево" />
          </button>
          <h3 className="game-info__title">Информация об игре</h3>
        </div>
        {errorMessage !== '' ? (
          <NotificationError message={errorMessage} />
        ) : (
          <>
            {!!gameData && (
              <div className="game-info__block">
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
                  <span className="gamedata__text">{gameData.address}</span>
                </div>

                <div className="gamedata__miniblock">
                  <div className="gamedata__subtitle">Стоимость за одного игрока</div>
                  <span className="gamedata__text">{gameData.priceValue}</span>
                </div>

                <div className="gamedata__miniblock">
                  <div className="gamedata__subtitle">Мест на игре</div>
                  <progress id="seats-progress" value={0.25}></progress>{' '}
                  <span className="gamedata__text">NULL / {gameData.maxPlayersCount}</span>
                </div>

                <div className="gamedata__miniblock">
                  <div className="gamedata__subtitle">Зарегистрировано</div>
                  <div className="gamedata__text">
                    <span>NULL команд NULL человек</span>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default GameData;
