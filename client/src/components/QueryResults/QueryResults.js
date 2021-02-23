import React, { Fragment } from 'react';
import ResultCard from './ResultCard';

import newegg from '../img/newegg_logo.jfif';
import walmart from '../img/walmart_logo.png';
<<<<<<< HEAD:src/components/QueryResults/QueryResults.js
import microcenter from '../img/microcenter_logo.jpg';
import slickdeals from '../img/slickdeals_logo.png';
import gearbest from '../img/gearbest_logo.png';
=======
import microcenter from '../img/microcenter_logo.jpg'
>>>>>>> bac53160a6994eca163d33b9a29a88c51ffdfdaa:client/src/components/QueryResults/QueryResults.js
import amazon from '../img/amazon_logo.png';

const QueryResults = (props) => {
    

    return (
        <Fragment>
            <div className="result__cardbox">
                <ResultCard query={props.queryString} company='Walmart' route='/api/walmart' logo={walmart}/>
                <ResultCard query={props.queryString} company='Newegg' route='/api/newegg' logo={newegg}/>
                <ResultCard query={props.queryString} company='Microcenter' route='/api/microcenter' logo={microcenter}/>
                <ResultCard query={props.queryString} company='Slickdeals' route='/api/slickdeals' logo={slickdeals}/>
                <ResultCard query={props.queryString} company='Gearbest' route='/api/gearbest' logo={gearbest}/>
                {/* <ResultCard query={props.queryString} company='Amazon' route='/api/amazon' logo={amazon}/> */}
            </div>
        </Fragment>
    );
}

export default QueryResults;
