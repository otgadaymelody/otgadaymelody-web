import React, { type FC } from 'react';
import BestOf from './best-of-item/BestOf';
import './best-of-block.css';

import { BESTOF_LIST } from './best.consts';


const BestOfBlock:  FC = () => {

    return (
        <div className='best-of-block__container' >
        
        {BESTOF_LIST.map((item, index) => (
            <BestOf key={index} image={item.image} title={item.title} subtitle={item.subtitle} description={item.description}>
            </BestOf>
        ))}
        </div>
    )
}

export default BestOfBlock;