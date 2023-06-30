import React, { type FC } from 'react';
import './franchise-audience.css';
import FranAudiencePic1 from '../../assets/images/franchise/franchise-audience-1.png';
import FranAudiencePic2 from '../../assets/images/franchise/franchise-audience-2.png';
import FranAudiencePic3 from '../../assets/images/franchise/franchise-audience-3.png';
import FranAudiencePic4 from '../../assets/images/franchise/franchise-audience-4.png';

const FranAudience: FC = () => {
  return (
    <section className="franchise-audience">
      <div>
        <h2 className="franchise-audience__title">Аудитория</h2>
        <p className="franchise-text">
          Мы безгранично любим тех, кто посещает наши игры, и бесспорно можем сказать, что это самая
          лучшая аудитория на свете. Это взрослыелюди с активной жизненной позицией, которые любят
          музыку, драйв и интересное времяпрепровождение.
        </p>
        <div className="franchise-audience__stats-wrapper">
          <img src={FranAudiencePic1} className="franchise-audience__stats"></img>
          <img src={FranAudiencePic2} className="franchise-audience__stats"></img>
        </div>
      </div>

      <div className="franchise-audience__container_right">
        <img src={FranAudiencePic3} className="franchise-audience__illustration_one"></img>
        <img src={FranAudiencePic4} className="franchise-audience__illustration_two"></img>
      </div>
    </section>
  );
};

export default FranAudience;
