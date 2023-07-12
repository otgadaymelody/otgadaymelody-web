import React from 'react';
import { ReactComponent as DropdownBtn } from '@assets/images/acc-franchisee/arrow.svg';
import avatar from '@assets/images/acc-franchisee/avatar.png';
import './PersonalInfo.css';

const PersonalInfo = (): React.ReactElement => {
  return (
    <>
      <img src={avatar} alt="аватар франчайзи" />
      <div className="name">
        <span className="name__firstname">Иван Иванович</span>
        <br />
        <span className="name__lastname">Иванов</span>
      </div>
      <DropdownBtn className="dropdown" />
    </>
  );
};

export default PersonalInfo;
