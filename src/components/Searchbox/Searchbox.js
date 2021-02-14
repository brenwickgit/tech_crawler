import React, { Fragment } from 'react';
import { withRouter }  from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Searchbox.css'

class Searchbox extends React.Component {

    constructor(props) {
        super(props)
        this.state = {query : ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({query: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/results${this.state.query}`);
    }


    render() {
        return (
            <Fragment>
                <div className="searchbox__container">
                    <div className="searchbox">
                        <form className="searchbox__form" onSubmit={this.handleSubmit}>
                            <input placeholder="Search an item..." required autoComplete="off" id="query" type="text" className="searchbox__entry" onChange={this.handleChange} value={this.props.query}/>
                                <button type="submit" className="searchbox__button"><FontAwesomeIcon icon={faSearch} size='2x'/></button>
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    };
}

export default withRouter(Searchbox);
