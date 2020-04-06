import React from 'react';
import MovieThumb from './MovieThumb.js';
import MovieFilter from './MovieFilter.js';
import '../css/MovieList.css';
import { Typography } from 'antd';

class MovieList extends React.Component {
    render() {
        const { Title } = Typography;

        if (this.props.loaded) {
            return (
                <article className="FiltersWithMovie">
                    <div className="movieFilter" id="page-wrap">
                        <MovieFilter filterYear={this.props.filterYear} filterRating={this.props.filterRating} filterTitle={this.props.filterTitle} movieList={this.props.movies} filterMovie={this.props.filterMovie} clearFilter={this.props.clearFilter} />
                    </div>
                    <div className="MovieList">
                        <Title id="movieTitle"> Movies </Title>

                        <div className="listBox">
                            {this.props.movies.map((m, index) =>
                                <MovieThumb key={index} favsList={this.props.favsList} movie={m} id={m.id} title={m.title} year={m.release_date} rating={m.ratings.average} addFav={this.props.addFav} changeView={this.props.changeView} />)
                            }
                        </div>
                    </div>
                </article>
            );
        }
        else {
            return (<span><i className="fas fa-spinner fa-spin"></i></span>);
        }
    }
}

export default MovieList;