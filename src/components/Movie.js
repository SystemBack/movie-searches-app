import React, { Component } from "react";
import PropTypes from 'prop-types'

export class Movie extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired
    }

    render () {
        const {title, poster, year} = this.props
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img
                        src={poster}
                        alt={title} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={poster} alt={title}/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{year}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}