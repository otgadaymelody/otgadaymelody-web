import React from 'react';
import UserAuthForm from '../components/user-auth/UserAuthForm';

const UserAuth = (): React.ReactElement => {
  return (
    <div className="user-auth">
      <div className="user-auth__container">
        <UserAuthForm />
      </div>
    </div>
  );
};

export default UserAuth;
