import React, { useEffect, useState } from 'react'
import './TeamBidsBlock.css'
import BlockToSort from './sort-data-block/BlockToSort'
import TeamBidData from './team-bid-data/TeamBidData'
import { TeamBidsData } from './team-bid-data/TeamBidsData.consts';



const TeamBidsBlock: React.FC  = (): React.ReactElement => {
  const [filtersData, setFiltersData] = useState(TeamBidsData)
  const [propToFilter, setPropToFilter] = useState('all')
  
  const handleSort = (propToFilter: string): void => {
    setPropToFilter(propToFilter)
    if(propToFilter === 'all') {
      setFiltersData(TeamBidsData.filter(a => a.status !== 'deleted'))
    } else {
      setFiltersData(TeamBidsData.filter(a => a.status === propToFilter))
    }
  } 
  useEffect(() => {
    handleSort(propToFilter)
  }, [])
  
  
  return (
    <div className='game-info__applications'>
        <h3 className="game-info__title">Заявки на игру</h3>
        <div className='game-info__block game-applications__wrapper'>
            <BlockToSort onChange={handleSort}/>
            <div className='game-applications__scrollBlock'>
                {filtersData.map((item, index) => (
                <TeamBidData
                key={index}
                applicationId={item.applicationId}
                gameId={item.gameId}
                playersCount={item.playersCount}
                contactPlayerName={item.contactPlayerName}
                contactPlayerPhone={item.contactPlayerPhone}
                status={item.status}
                teamName={item.teamName}
                />
                ))}
            </div>  
        </div>
    </div>
  )
}

export default TeamBidsBlock