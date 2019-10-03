import React, { Fragment, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { users, loading } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <div className="users-grid my-5">
          {users.map(user => (
            <UserItem user={user} key={user.id} />
          ))}
        </div>
      </Fragment>
    );
  }
};

export default Users;
