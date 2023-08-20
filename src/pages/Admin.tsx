import React from 'react';
import AdminGames from '../components/admin/admin-games/AdminGames';
import { Navigate } from 'react-router-dom';

const Admin = (): React.ReactElement => {
  const isAdmin = true;

  return (
    <>
      {isAdmin ? (
        <main className="admin">
          <AdminGames />
        </main>
      ) : (
        <Navigate to={'/'} />
      )}
    </>
  );
};

export default Admin;
