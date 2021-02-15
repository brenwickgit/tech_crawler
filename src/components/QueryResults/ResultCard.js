import React, { Fragment } from 'react';
import './QueryResults.css';
import Spinner from '../Spinner/Spinner';


export default class ResultCard extends React.Component {

    state = {
        loading: true,
        data: null
    }

    async componentDidMount() {
        const url = 'http://localhost:5000' + this.props.route;
        const response = await fetch(url,  {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({string: this.props.query})
        });
        const scrapedData = await response.json();
        this.setState({data: scrapedData, loading: false})
    }

    render()  {

        if (this.state.loading) {
            return (
                <div className="card__placeholder">
                    <Spinner />
                </div>
            ) 
        }

        if (!this.state.data){
            return (
                <div className="card__placeholder">
                    <h1 className="card__title">Missing data...</h1>
                </div>
            )
        }

        return (
            <div className="card">
                <img className="card__logo" src={this.props.logo}></img>
                <div className="card__content">
                    <div className="result__items">{this.state.data.splice(0, 4).map(item => (
                        <div className="result__item" key={item.title}>
                            <img className="result__img" src={item.image}></img>
                            <a href={item.link} target="_blank" className="result__title">{item.title}</a>
                            <p className="result__price">${item.price}</p>
                        </div>
                    ))}</div>
                </div>
            </div>
        );

    }
}