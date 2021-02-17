import React, { Fragment } from 'react';
import Intro from '../components/Intro/Intro';
import Searchbox from '../components/Searchbox/Searchbox';
import './Landing.css';

const Landing = (props) => {

    return (
        <Fragment>
            <div className="landing__container">
                <Intro />
                <Searchbox />
            </div>
        </Fragment>
    );
}

export default Landing;
