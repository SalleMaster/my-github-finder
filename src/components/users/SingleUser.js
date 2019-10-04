import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';
import { isConditional } from '@babel/types';

const SingleUser = () => {
  const githubContext = useContext(GithubContext);

  const { user } = githubContext;

  const {
    name,
    hireable,
    avatar_url,
    bio,
    company,
    location,
    login,
    blog
  } = user;

  return (
    <Fragment>
      <div className="row">
        <div className="col d-flex justify-content-left align-items-center">
          <Link className="btn btn-primary mr-4" to="/">
            Back To Search
          </Link>

          <span>
            Hireable:{' '}
            {hireable ? (
              <i className="fas fa-check text-success"></i>
            ) : (
              <i className="text-danger fas fa-times-circle"></i>
            )}
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 text-center">
          <img
            src={avatar_url}
            alt="Profile"
            className="img rounded-circle"
            style={{ width: '150px' }}
          />
          <h2>{name}</h2>
          <p className="lead">Location: {location}</p>
        </div>
        <div className="col-md-6 text-left"></div>
      </div>
    </Fragment>
  );
};

export default SingleUser;
