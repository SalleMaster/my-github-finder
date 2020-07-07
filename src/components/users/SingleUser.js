import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';
// import { isConditional } from '@babel/types';

const SingleUser = () => {
  const githubContext = useContext(GithubContext);

  const { user, repos } = githubContext;

  const {
    name,
    hireable,
    avatar_url,
    bio,
    company,
    location,
    login,
    blog,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  return (
    <Fragment>
      <div className='row'>
        <div className='col d-flex justify-content-left align-items-center'>
          <Link className='btn btn-primary mr-4' to='/'>
            Back To Search
          </Link>

          <span>
            Hireable:{' '}
            {hireable ? (
              <i className='fas fa-check text-success'></i>
            ) : (
              <i className='text-danger fas fa-times-circle'></i>
            )}
          </span>
        </div>
      </div>
      <div className='row my-4'>
        <div className='col-md-6 text-center'>
          <img
            src={avatar_url}
            alt='Profile'
            className='img rounded-circle'
            style={{ width: '150px' }}
          />
          <h2>{name}</h2>
          <p className='lead'>Location: {location}</p>
        </div>
        <div className='col-md-6 text-left'>
          <h3>Bio</h3>
          <p>{bio}</p>
          <a href={html_url} className='btn btn-dark btn-lg my-3'>
            Visit GitHub Profile
          </a>
          <br />

          {login && (
            <Fragment>
              <strong>Username: </strong> {login}
              <br />
            </Fragment>
          )}
          {company && (
            <Fragment>
              <strong>Company: </strong> {company}
              <br />
            </Fragment>
          )}
          {blog && (
            <Fragment>
              <strong>Website: </strong> {blog}
              <br />
            </Fragment>
          )}
        </div>
      </div>
      <div className='row my-5'>
        <div className='col'>
          <div className='card my-3'>
            <div className='card-body align-items-center justify-content-around d-flex'>
              <h4 className='inline-block'>
                <span className='badge badge-danger p-2'>
                  Followers: {followers}
                </span>
              </h4>
              <h4 className='inline-block'>
                <span className='badge badge-success p-2'>
                  Following: {following}
                </span>
              </h4>
              <h4 className='inline-block'>
                <span className='badge badge-light p-2'>
                  Public Repos: {public_repos}
                </span>
              </h4>
              <h4 className='inline-block'>
                <span className='badge badge-dark p-2'>
                  Public Gists: {public_gists}
                </span>
              </h4>
            </div>
          </div>
          {repos && (
            <Fragment>
              {repos.slice(0, 5).map((repo) => (
                <div className='card my-3'>
                  <div className='card-body'>
                    <h3>
                      <a href={repo.html_url}>{repo.full_name}</a>
                    </h3>
                  </div>
                </div>
              ))}
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default SingleUser;
