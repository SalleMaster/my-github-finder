import React, { Fragment } from 'react';
import spinner from './spinner.svg';

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt='Loading...' style={spinnerStyle} />
    </Fragment>
  );
};

const spinnerStyle = {
  display: 'block',
  margin: 'auto',
};

export default Spinner;
