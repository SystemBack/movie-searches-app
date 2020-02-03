import React, { Component } from "react";
import { MoviesList } from "../components/MoviesList";
import { Title } from "../components/Title"
import { SearchForm } from "../components/SearchForm";



export class Home extends Component {
    state = { results: [], isSearched: false }

    _handleResults = (results) => {
        this.setState({ results, isSearched: true })
    }

    _renderResults = () => {
        return this.state.results.length === 0
            ? <p>Not results</p>
            : <MoviesList movies={this.state.results} />
    }

    render () {
        return (
            <div>
                <Title>search movies</Title>
                <div className="search-form">
                    <SearchForm onResults={this._handleResults} />
                </div>
                {
                    this.state.isSearched
                        ? this._renderResults()
                        : <p>Please search some movie on search input.</p>
                }
            </div>
        )
    }
}