import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';
import Alert from '../alert/Alert';

const Home = () => {
  return (
    <Fragment>
      <header className='home-header'>
        <h1 className='text-primary'>Find user on GitHub</h1>
      </header>
      <Alert />
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;
