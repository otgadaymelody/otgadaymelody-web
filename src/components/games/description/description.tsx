import React, { type FC } from 'react';
import './description.css';

const Description: FC = () => {
  return (
    <section className="description">
      <div className="description__container">
        <p className="description__text">
          <span className="description__start">«Отгадай Мелодию»</span> — это самая народная
          интеллектуально-музыкальная битва, в которой неважно насколько музыкально продвинутые
          игроки, главное, что на протяжении 2,5 — 3 часов они будут находится в непередаваемой
          атмосфере, отгадывать знакомые мелодии, петь во весь голос, танцевать и веселиться от
          души.
        </p>
      </div>
    </section>
  );
};

export default Description;
