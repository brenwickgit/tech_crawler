import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import QueryResults from '../components/QueryResults/QueryResults';

const Results = (props) => {

    let { query } = useParams()
    let rawQuery = query.replaceAll(" ", "+")

    return (
        <Fragment>
            <QueryResults queryString={rawQuery}/>
        </Fragment>
    );
}

export default Results;
