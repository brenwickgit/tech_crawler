import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import Typist from 'react-typist';
import './Intro.css'

class Intro extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <div className="intro__container">
                    <FontAwesomeIcon className="intro__icon" icon={faRobot} size='6x'/>
                    <h1 className="intro__heading">Welcome to TechCrawler</h1>
                    <Typist
                        className="intro__text"
                        avgTypingDelay={120}
                        cursor={{blink: true}}>
                            <span className="bio__symbol"></span> Enter a search term to begin 
                    </Typist>
                </div>
            </Fragment>
        )
    };
}

export default Intro;
