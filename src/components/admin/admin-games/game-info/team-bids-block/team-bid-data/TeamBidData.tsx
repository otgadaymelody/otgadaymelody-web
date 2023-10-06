import React from 'react';
import type { TeamBidDataType } from './TeamBidData.interface';
import './TeamBidData.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TeamBidData: React.FC<{
  teamBid: TeamBidDataType;
  gamePrice: string;
}> = ({
  teamBid,
  gamePrice,
}: {
  teamBid: TeamBidDataType;
  gamePrice: string;
}): React.ReactElement => {
  const { gameId } = useParams() as { gameId: number | undefined };

  const cancel = (): void => {
    axios
      .put(
        `/api/admin/game-applications/cancel?applicationId=${String(teamBid.id)}&gameId=${String(
          gameId,
        )}`,
      )
      .then((res) => {
        window.location.reload();
        alert('Статус обновлен');
      })
      .catch((err: { response: { data: { message: string } } }) => {
        alert(`Ошибка: ${err?.response?.data?.message ?? ''}`);
      });
  };

  const restore = (): void => {
    axios
      .put(
        `/api/admin/game-applications/restore?applicationId=${String(teamBid.id)}&gameId=${String(
          gameId,
        )}`,
      )
      .then((res) => {
        window.location.reload();
        alert('Статус обновлен');
      })
      .catch((err: { response: { data: { message: string } } }) => {
        alert(`Ошибка: ${err?.response?.data?.message ?? ''}`);
      });
  };

  const approve = (): void => {
    axios
      .put(
        `/api/admin/game-applications/approve?applicationId=${String(teamBid.id)}&gameId=${String(
          gameId,
        )}`,
      )
      .then((res) => {
        window.location.reload();
        alert('Статус обновлен');
      })
      .catch((err: { response: { data: { message: string } } }) => {
        alert(`Ошибка: ${err?.response?.data?.message ?? ''}`);
      });
  };
  return (
    <div className="team-data__wrapper">
      <div className="team-data__insideblock">
        <div className="up_block">
          <div className="team-name">{teamBid.teamName}</div>
          <div className="count__players">{teamBid.teamCount} чел.</div>
        </div>
        <div className="team-leader__data">
          <span className="team-leader__data-name">{teamBid.socialLink}</span>
          <span className="team-leader__data-phone">{teamBid.phoneNumber}</span>
          <span className="team-leader__data-phone">{teamBid.comment}</span>
        </div>
        <div className="team-status__block">
          <div
            className={
              teamBid.status === 'pending'
                ? 'status--is_pending'
                : teamBid.status === 'approved'
                ? 'status--is_approved'
                : 'status--is_deleted'
            }
          >
            {teamBid.status === 'pending'
              ? 'В ожидании'
              : teamBid.status === 'approved'
              ? 'Подтвержден'
              : 'Удален'}
          </div>
          <div className="status--buttons">
            {teamBid.status === 'pending' && (
              <button className="button__approve" onClick={approve}>
                Подтвердить
              </button>
            )}
            <button className="button__delete">
              {teamBid.status === 'deleted' ? (
                <button className="button__delete" onClick={() => restore()}>
                  Восстановить
                </button>
              ) : (
                <button className="button__delete" onClick={() => cancel()}>
                  Отменить
                </button>
              )}
            </button>
          </div>
        </div>
        {/* <div className="block_deposit">~~~ {Number(teamBid.teamCount) * 500} р</div> */}
      </div>
    </div>
  );
};

export default TeamBidData;
