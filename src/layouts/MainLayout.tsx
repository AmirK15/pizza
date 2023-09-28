import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components';

const MainLayout: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
