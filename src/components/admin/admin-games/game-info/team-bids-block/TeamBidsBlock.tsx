import React, { useEffect, useState } from 'react'
import './TeamBidsBlock.css'
import BlockToSort from './sort-data-block/BlockToSort'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import type { TeamBidDataType } from './team-bid-data/TeamBidData.interface';
import TeamBidData from './team-bid-data/TeamBidData';



const TeamBidsBlock: React.FC  = (): React.ReactElement => {
  const [propToFilter, setPropToFilter] = useState('all')
  const [gamesData, setGamesData] = useState<TeamBidDataType[]>()
  const [filtersData, setFiltersData] = useState<TeamBidDataType[]>()
  const [isLoaded, setIsLoaded] = useState(false)
  const paramsGameId = useParams().gameId

  useEffect(() => {
    axios
    .get(`/api/admin/game-applications?gameId=${paramsGameId ?? 0}`)
    .then((res) => {
      setGamesData(res.data)
      setIsLoaded(true)
      isLoaded && handleSort(propToFilter)
    })
    .catch((err) => {
      console.log(err)
    }) 
  }, [isLoaded]);
  
    const handleSort = (propToFilter: string): void => {
      setPropToFilter(propToFilter)
      if(propToFilter === 'all') {
        setFiltersData(gamesData?.filter(a => a.status !== 'deleted'))
      } else {
        setFiltersData(gamesData?.filter(a => a.status === propToFilter))
      }
    }
    
    return (
      <div className='game-info__applications'>
          <h3 className="game-info__title">Заявки на игру</h3>
          <div className='game-info__block game-applications__wrapper'>
              <BlockToSort onChange={handleSort}/>
              <div className='game-applications__scrollBlock'>
              {!isLoaded 
              ? (
                <div>
                  Loading...
                </div>
              ) 
              : (
                  filtersData?.map((item: TeamBidDataType, index: number) => (
                  <TeamBidData
                  gamesData = {gamesData}
                  key={index}
                  applicationId={item.applicationId}
                  gameId={item.gameId}
                  playersCount={item.playersCount}
                  contactPlayerName={item.contactPlayerName}
                  contactPlayerPhone={item.contactPlayerPhone}
                  status={item.status}
                  teamName={item.teamName}
                  />
                  ))
                )
              }
              </div>  
          </div>
      </div>
    )
  }


export default TeamBidsBlock
