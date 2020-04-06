import React from 'react';
import MovieThumb from './MovieThumb.js';
import MovieFilter from './MovieFilter.js';
import FilteredMovieThumb from './FilteredMovieThumb.js';
import '../css/MovieList.css';
import { Typography } from 'antd';

class FilteredMovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filterMovies: [] };
    }

    render() {
        const { Title } = Typography;

        let display = "";
        if (this.props.movies.length > 0) {
            display = this.props.movies.map((m, index) =>
                <FilteredMovieThumb key={index} movie={m} id={m.id} favsList={this.props.favsList} title={m.title} year={m.release_date} rating={m.ratings.average} addFav={this.props.addFav} />)
        }
        else {
            display = <div style={{
                textAlign: 'center'
            }}>No matching movies were found!</div>;
        }

        return (
            <article className="FiltersWithMovie">
                <div className="movieFilter" id="page-wrap">
                    <MovieFilter clearFilter={this.props.clearFilter} filterYear={this.props.filterYear} filterTitle={this.props.filterTitle} filterRating={this.props.filterRating} filterMovie={this.props.filterMovie} />
                </div>

                <div className="MovieList">
                <Title id="movieTitle"> Movies </Title>
                    <div className="listBox">
                        {display}
                    </div>
                </div>
            </article>
        );
    }
}

export default FilteredMovieList;