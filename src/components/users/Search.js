import React, { useState, useContext, Fragment } from 'react';
import GithubContext from '../../context/github/githubContext';

const Search = () => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    githubContext.searchUsers(text);
    setText('');
  };

  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            id="name"
            placeholder="Enter name"
            value={text}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-primary btn-block" type="submit">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default Search;
