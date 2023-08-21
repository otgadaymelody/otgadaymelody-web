import React from 'react'
import type { TeamBidDataType } from './TeamBidData.interface'
import './TeamBidData.css'

const TeamBidData: React.FC<TeamBidDataType> = (
  {
    applicationId,
    gameId,
    playersCount,
    contactPlayerName,
    contactPlayerPhone,
    status,
    teamName
  }
): React.ReactElement => {
  return (
    <div className='team-data__wrapper'>
        <div className='team-data__insideblock'>
          <div className="up_block">
            <div className='team-name'>
              {teamName}
            </div>
            <div className='count__players'>
              {playersCount} чел.
            </div>
          </div>
          <div className='team-leader__data'>
            <span className='team-leader__data-name'>
              {contactPlayerName}
            </span>
            <span className='team-leader__data-phone'>
              {contactPlayerPhone}
            </span>
          </div>
          <div className='team-status__block'>
                <div className={status === 'pending'? 'status--is_pending' : status === 'approved' ? 'status--is_approved' : 'status--is_deleted'}>
                    {status === 'pending' ? 'В ожидании' : status === 'approved' ? 'Подтвержден' : 'Удален'}
                </div>
                <div className='status--buttons'>
                  {status === 'pending' && (
                    <button className='button_approve'>
                      Подтвердить
                    </button>
                  )}
                    <button className='button_delete'>
                      Отменить
                    </button>
                </div>
          </div>
          <div className='block_deposit'>
              {playersCount*500} р
          </div>
        </div>
      </div>
    )
}

export default TeamBidData