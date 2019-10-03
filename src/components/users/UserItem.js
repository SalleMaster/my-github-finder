import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { avatar_url, login } }) => {
  return (
    <div className="card text-center py-3">
      <div className="card-body">
        <img
          className="img rounded-circle mb-3"
          src={avatar_url}
          alt="Profile Image"
          style={{ width: '60px' }}
        />
        <h4 className="card-title">{login}</h4>
        <Link
          className="btn btn-outline-primary btn-sm px-3 mt-2"
          to={`/user/${login}`}
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
