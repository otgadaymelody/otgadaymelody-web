import React, { useEffect, useState } from 'react';
import './TeamBidsBlock.css';
import BlockToSort from './sort-data-block/BlockToSort';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import type { TeamBidDataType } from './team-bid-data/TeamBidData.interface';
import TeamBidData from './team-bid-data/TeamBidData';

const TeamBidsBlock: React.FC = (): React.ReactElement => {
  const [propToFilter, setPropToFilter] = useState<'all' | 'cancel' | 'approved' | 'pending'>(
    'all',
  );
  const [gamesData, setGamesData] = useState<TeamBidDataType[]>();
  const [filtersData, setFiltersData] = useState<TeamBidDataType[]>();
  const [isLoaded, setIsLoaded] = useState(false);
  const paramsGameId = useParams().gameId;

  useEffect(() => {
    if (paramsGameId !== undefined)
      axios
        .get(`/api/admin/game-applications?gameId=${paramsGameId}`)
        .then((res) => {
          setGamesData(res.data);
          setIsLoaded(true);
          isLoaded && handleSort(propToFilter);
        })
        .catch(() => {});
  }, [isLoaded]);

  const handleSort = (propToFilter: 'all' | 'cancel' | 'approved' | 'pending'): void => {
    setPropToFilter(propToFilter);
    if (propToFilter === 'all') {
      setFiltersData(gamesData?.filter((a) => a.status !== 'cancel'));
    } else {
      setFiltersData(gamesData?.filter((a) => a.status === propToFilter));
    }
  };

  return (
    <article className="game-info-applications">
      <h3 className="game-info__title">Заявки на игру</h3>
      <div className="game-info__block game-applications__wrapper">
        <BlockToSort onChange={handleSort} />
        <div className="game-applications__scrollBlock">
          {!isLoaded ? (
            <div>Loading...</div>
          ) : (
            filtersData?.map((item: TeamBidDataType, index: number) => (
              <TeamBidData key={index} teamBid={item} gamePrice={'500'} />
            ))
          )}
        </div>
      </div>
    </article>
  );
};

export default TeamBidsBlock;
