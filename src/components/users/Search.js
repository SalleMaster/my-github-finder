import React, { useState, useContext, Fragment } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { setAlert, removeAlert } = alertContext;

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      return setAlert();
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = e => {
    setText(e.target.value);
  };

  const clear = () => {
    githubContext.clearUsers();
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            id='name'
            placeholder='Enter name'
            value={text}
            onChange={onChange}
          />
        </div>
        <button className='btn btn-primary btn-block' type='submit'>
          Submit
        </button>
        {githubContext.users.length > 0 && (
          <button className='btn btn-light btn-block' onClick={clear}>
            Clear
          </button>
        )}
      </form>
    </Fragment>
  );
};

export default Search;
