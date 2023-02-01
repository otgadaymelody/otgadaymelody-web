import React, { FC } from 'react'
import './BlockBackground.css'
import { BlockBackgroundProps } from './BlockBackgroundProps'
import { ReactComponent as TopLeftMediator } from '../../assets/images/home-page/mediator-top-left.svg'
import { ReactComponent as TopRightMediator } from '../../assets/images/home-page/mediator-top-right.svg'
import { ReactComponent as BottomLeftMediator } from '../../assets/images/home-page/mediator-bottom-left.svg'
import { ReactComponent as BottomRightMediator } from '../../assets/images/home-page/mediator-bottom-right.svg'

const BlockBackground: FC<BlockBackgroundProps> = ({mediatorsClasses,...props}) => {
  return (
    <div className={['block-background', props.className].join(' ')}>
      <div className="block-background__content">
        {props.children}
      </div>
      <div className="block-background__mediators">
        <TopLeftMediator className={['block-background__mediator', mediatorsClasses.topLeft].join(' ')}/>
        <TopRightMediator className={['block-background__mediator', mediatorsClasses.topRight].join(' ')}/>
        <BottomLeftMediator className={['block-background__mediator', mediatorsClasses.bottomLeft].join(' ')}/>
        <BottomRightMediator className={['block-background__mediator', mediatorsClasses.bottomRight].join(' ')}/>
      </div>
   </div>
  )
}

export default BlockBackground