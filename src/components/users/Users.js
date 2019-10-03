import React, { Fragment, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import UserItem from './UserItem';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { users } = githubContext;

  return (
    <div className="users-grid my-5">
      {users.map(user => (
        <UserItem user={user} />
      ))}
    </div>
  );
};

export default Users;
