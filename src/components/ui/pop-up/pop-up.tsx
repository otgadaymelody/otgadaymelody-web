import React, { type FC } from 'react';
import './pop-up.css';

interface popUpProps extends React.AllHTMLAttributes<HTMLDivElement> {
  clickClose: () => void;
}

const PopUp: FC<popUpProps> = ({ clickClose, ...props }): React.ReactElement => {
  return <div className={`pop-up`}></div>;
};

export default PopUp;
