import React, { type FC } from 'react';
import { type BetsOfProps } from './BestOfProps';
import './BestOf.css';

const BestOf:  FC<BetsOfProps> = ({ image, title, subtitle, description }): React.ReactElement  => {

    const newDescription = description.split('\n');

    return (
        <article>
        <div className='best-of__container'>
            <div className='best-of__img-conainer'>
                <img className='best-of__img' src={image} alt='happy people'></img>
            </div>

        <div className='best-of__text-container'>
            <h1 className='best-of__title'>{title}</h1>
            <div className='best-of__subtitle'>{subtitle}</div>
            {newDescription.map((item, index) => (
                <p className='best-of__description' key={index}>
                {item}
                </p>
            ))}
            

        </div>
        </div>
        </article>
    )
}

export default BestOf;