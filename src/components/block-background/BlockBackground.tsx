import React, { FC } from 'react'
import './BlockBackground.css'
import { BlockBackgroundProps } from './BlockBackgroundProps'
import { ReactComponent as Mediator } from '../../assets/images/home-page/mediator-small.svg'

const BlockBackground: FC<BlockBackgroundProps> = ({mediators, ...props}) => {
  return (
    <div className={['block-background', props.className].join(' ')}>
      <Mediator className='block-background__mediator'/>
      {props.children}
   </div>
  )
}

export default BlockBackground