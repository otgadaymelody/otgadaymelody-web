import React, { type FC } from 'react';
import { type GamesTableRowProps } from './GamesTableRowProps';

import treeDots from '@assets/images/acc-franchisee/three-dots.svg';

const GamesTableRow: FC<GamesTableRowProps> = ({
  title,
  theme,
  dateInfo,
  price,
  seatsOccupied,
  seats,
  applications,
}): React.ReactElement => {
  return (
    <tr className="games-table__row tbody__row">
      <td className="games-table__data">{title}</td>
      <td className="games-table__data">{theme}</td>
      <td className="games-table__data">
        {dateInfo.day} {dateInfo.month}
      </td>
      <td className="games-table__data">{price}</td>
      <td className="games-table__data">
        <progress id="seats-progress" value={0.25}></progress>
        {seatsOccupied} / {seats}
      </td>
      <td className="games-table__data">{applications}</td>
      <td className="games-table__data">
        <button className="dots-btn">
          <img src={treeDots} alt="три вертикальные точки" />
        </button>
      </td>
    </tr>
  );
};

export default GamesTableRow;
