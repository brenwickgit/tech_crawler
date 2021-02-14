import React, { Fragment } from 'react';
import spinner from '../components/img/spinner.gif';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '40px', margin: 'auto', display: 'block'}}
      alt="Loading..."
      />
  </Fragment>
);
