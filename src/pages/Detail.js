import React, { Component } from "react";
import PropTypes from 'prop-types';

const API_KEY = '2ef00659'

export class Detail extends Component {

    state = { movie: {}}

    static propTypes = {
        id: PropTypes.string
    }

    componentDidMount() {
        const { id } = this.props
        this._fetchMovie(id);
    }

    _fetchMovie = (id) => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                console.log(movie)
                this.setState({movie})
            })
    }

    render () {
        const { Title, Poster, Actors, Metascore, Plot} = this.state.movie
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={Poster} alt={Title} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={Poster} alt={Title} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{Title}</p>
                            <p className="subtitle is-6">Actors: {Actors}</p>
                        </div>
                    </div>

                    <div className="content">
                        <p>{Plot}</p>
                        <br />
                        <span>{Metascore}</span>
                        </div>
                    </div>
                </div>
        )
    }

}