import React, { Fragment, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert === true && (
      <Fragment>
        <div className='alert alert-light'>
          <i className='fas fa-info-circle'></i> Please enter something
        </div>
      </Fragment>
    )
  );
};

export default Alert;
