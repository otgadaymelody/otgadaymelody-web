import React, { type FC } from 'react';
import './BestOf.css';
import bestPreview from './best-of-demo.png';

const BestOf:  FC = () => {

    return (
        <section>
        <div className='bestOf_container'>
            <div className='bestOf_imgConainer'><img className='bestOf_img' src={bestPreview} alt='happy people'></img></div>
        <div className='bestOf_textContainer'>
            <div className='bestOf_title'>Лучшие в своем деле</div>
            <div className='bestOf_subTitle'>Придумали новый формат, не похожий на подобные мероприятия.</div>
            <div className='bestOf_description'>Формат собрал в себе элементы классического квиза с вопросами, самого шумного караоке и вечеринки с жаркими танцами. Все это в совокупности закрывает большую часть потребностей человека в качественном и интересном досуге.</div>
            <div className='bestOf_description'>Просто поверьте, что такого вы еще не видели!</div>
        </div>
        </div>
        </section>
    )
}

export default BestOf;