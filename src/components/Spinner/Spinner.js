import React, { Fragment } from 'react';
import spinner from '../img/spinner.gif';
import './Spinner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons';

export default () => (
  <Fragment>
    <div className="spinner__container">
      <img
        src={spinner}
        style={{ width: '40px', margin: 'auto', display: 'block'}}
        alt="Loading..."
        />
        <FontAwesomeIcon className="spinner__icon" icon={faRobot} size='4x'/>
      <p className="spinner__text">Finding the best deals...</p>
    </div>
  </Fragment>
);
