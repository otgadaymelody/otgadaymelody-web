import React, { type FC } from 'react';
import { type RulesItemProps } from './rules-item-props';
import './rules-item.css';

const RulesItem: FC<RulesItemProps> = ({title, subtitle}): React.ReactElement => {

    return (
        <>
        <div className='rules-item__container'>
            <h2 className='rules-item__title'>{title}</h2>
            <p className='rules-item__subtitle'>{subtitle}</p>
        </div>
        </>
    )
}

export default RulesItem;