import React, { useState } from 'react';
import './BlockToSort.css';

interface SortFDataBlockProps {
  onChange: any;
}

const BlockToSort: React.FC<SortFDataBlockProps> = ({ onChange }) => {
  const [isActiveId, setActiveId] = useState('__all');

  const handleChoose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    setActiveId(e.currentTarget.id);
    onChange(e.currentTarget.id.replace('__', ''));
  };
  return (
    <div className="sort-data__block">
      <button
        onClick={(e) => handleChoose(e)}
        id="__all"
        className={isActiveId === '__all' ? 'sort-data__button_active' : 'sort-data__button'}
      >
        Все
      </button>
      <button
        onClick={(e) => handleChoose(e)}
        id="__pending"
        className={isActiveId === '__pending' ? 'sort-data__button_active' : 'sort-data__button'}
      >
        В ожидании
      </button>
      <button
        onClick={(e) => handleChoose(e)}
        id="__approved"
        className={isActiveId === '__approved' ? 'sort-data__button_active' : 'sort-data__button'}
      >
        Подтверждён
      </button>
      <button
        onClick={(e) => handleChoose(e)}
        id="__cancel"
        className={isActiveId === '__cancel' ? 'sort-data__button_active' : 'sort-data__button'}
      >
        Удалён
      </button>
    </div>
  );
};

export default BlockToSort;
