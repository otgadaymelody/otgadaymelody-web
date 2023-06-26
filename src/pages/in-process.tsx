import React, { useRef } from 'react';
import inProcessImg from '../assets/images/inprocess/underconstr.png';

const InProcess: React.FC = () => {
  return (
    <div className="in-process">
      <img className="in-process__image" src={inProcessImg} />
    </div>
  );
};

export default InProcess;
