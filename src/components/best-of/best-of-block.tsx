import React, { type FC } from 'react';
import BestOf from './best-of-item/BestOf';
import './best-of-block.css';



const BestOfBlock:  FC = () => {

    return (
        <div className='bestOfBlock__container' >
        <div className='bestOfBlock__first'>
            <BestOf></BestOf>
            <BestOf></BestOf>
        </div>

        <div className='bestOfBlock__second'>
          <BestOf></BestOf>
          <BestOf></BestOf>
        </div>
        
        
        </div>
    )
}

export default BestOfBlock;