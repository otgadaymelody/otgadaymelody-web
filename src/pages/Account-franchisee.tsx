import React from 'react';
import FranciseeGames from '../components/acc-franchisee/franchisee-games/FranchiseeGames';
import { Navigate } from 'react-router-dom';

const AccountFranchisee = (): React.ReactElement => {
  const isAdmin = true;

  return (
    <>
      {isAdmin ? (
        <main className="account-francisee">
          <FranciseeGames />
        </main>
      ) : (
        <Navigate to={'/'} />
      )}
    </>
  );
};

export default AccountFranchisee;
