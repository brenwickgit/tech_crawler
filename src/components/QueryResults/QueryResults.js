import React, { Fragment } from 'react';
import ResultCard from './ResultCard';

import newegg from '../img/newegg_logo.jfif';
import walmart from '../img/walmart_logo.png';
import amazon from '../img/amazon_logo.png';

const QueryResults = (props) => {
    

    return (
        <Fragment>
            <div className="result__cardbox">
                <ResultCard query={props.queryString} company='Newegg' route='/api/newegg' logo={newegg}/>
                <ResultCard query={props.queryString} company='Walmart' route='/api/walmart' logo={walmart}/>
                <ResultCard query={props.queryString} company='Amazon' route='/api/amazon' logo={amazon}/>
            </div>
        </Fragment>
    );
}

export default QueryResults;
