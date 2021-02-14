import React, { Fragment, useState } from 'react';
import { Link }  from 'react-router-dom';
import './Searchbox.css'

const Searchbox = (props) => {

    const [query, setQuery] = useState("");

    return (
        <Fragment>
            <div className="searchbox__container">
                <div className="searchbox">
                    <form className="searchbox__form">
                        <input placeholder="Search an item..." required autoComplete="off" id="query" type="text" className="searchbox__entry" value={query} onChange={e => setQuery(e.target.value)}/>
                        <Link to={`/results${query}`}>
                            <button type="submit" className="searchbox__button">Submit</button>
                        </Link>
                    </form>
                </div>
            </div>

        </Fragment>
    );
}

export default Searchbox;
