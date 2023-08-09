import React, { type FC } from 'react';
import './BlockBackground.css';
import { type BlockBackgroundProps } from './BlockBackgroundProps';
import { ReactComponent as TopLeftMediator } from '../../assets/images/home-page/mediator-top-left.svg';
import { ReactComponent as TopRightMediator } from '../../assets/images/home-page/mediator-top-right.svg';
import { ReactComponent as BottomLeftMediator } from '../../assets/images/home-page/mediator-bottom-left.svg';
import { ReactComponent as BottomRightMediator } from '../../assets/images/home-page/mediator-bottom-right.svg';
import { concatStyles } from '../../utils/concat-styles';

const BlockBackground: FC<BlockBackgroundProps> = ({ mediatorsClasses, ...props }) => {
  return (
    <div className={['block-background', props.className].join(' ')}>
      {props.children}
      <TopLeftMediator
        className={concatStyles('block-background__mediator', mediatorsClasses.topLeft)}
      />
      <TopRightMediator
        className={concatStyles('block-background__mediator', mediatorsClasses.topRight)}
      />
      <BottomLeftMediator
        className={concatStyles('block-background__mediator', mediatorsClasses.bottomLeft)}
      />
      <BottomRightMediator
        className={concatStyles('block-background__mediator', mediatorsClasses.bottomRight)}
      />
    </div>
  );
};

export default BlockBackground;
