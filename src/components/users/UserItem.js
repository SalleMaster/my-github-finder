import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';
import { GET_REPOS } from '../../context/types';

const UserItem = ({ user: { avatar_url, login, repos_url } }) => {
  const githubContext = useContext(GithubContext);

  const { getSingleUser, getRepos } = githubContext;

  const setUser = () => {
    getSingleUser(login);
    getRepos(repos_url);
  };

  return (
    <div className='card text-center py-3'>
      <div className='card-body'>
        <img
          className='img rounded-circle mb-3'
          src={avatar_url}
          alt='Profile'
          style={{ width: '60px' }}
        />
        <h4 className='card-title'>{login}</h4>
        <Link
          className='btn btn-outline-primary btn-sm px-3 mt-2'
          to={`/user/${login}`}
          onClick={setUser}
        >
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
