import React from 'react';
import MovieList from './MovieList.js';
import Header from './HeaderApp.js';
import FilteredMovieList from './FilteredMovieList.js';
import Favorites from './Favorites.js';

class DefaultView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movies: this.filterTitle(this.props.movies), loaded: false };
        this.state = { title: "", yearBefore: "", ratingBefore: "" };
        this.state.filteredMovies = {};
        this.state.showFiltered = false;
        this.state.homeSearch = '';
    }


    addFav = (poster) => { // takes a whole movie object
        this.props.addsFav(poster);
    }

    deleteFav = (movie) => {
        this.props.deletesFav(movie);
    }

    filterMovie = (title, minYear, maxYear, minRating, maxRating) => {

        let initialList = this.props.movies;
        let sortedTitle = [];
        let sortedRating = [];
        let sortedYear = [];


        this.setState({ movies: initialList })
        if (title) {
            sortedTitle = initialList.filter((movie) => {
                if ((movie.title.toLowerCase()).includes(title.toLowerCase())) {
                    return movie;
                }
            }
            )
        } else { sortedTitle = initialList }

        if (minRating && maxRating) {
            sortedRating = sortedTitle.filter((movie) => {
                if (minRating <= movie.ratings.average && movie.ratings.average <= maxRating) {
                    return movie;
                }
            })
        }
        else if (minRating) {
            sortedRating = sortedTitle.filter((movie) => {
                if (minRating <= movie.ratings.average) {
                    return movie;
                }
            })
        }
        else if (maxRating) {
            sortedRating = sortedTitle.filter((movie) => {
                if (movie.ratings.average <= maxRating) {
                    return movie;
                }
            })
        }
        if (sortedRating.length == 0) { sortedRating = sortedTitle }

        if (minYear && maxYear) {
            sortedYear = sortedRating.filter((movie) => {
                if (minYear <= movie.release_date.substring(0, 4) && movie.release_date.substring(0, 4) <= maxYear) {
                    return movie;
                }
            })
        }
        else if (minYear) {
            sortedYear = sortedRating.filter((movie) => {
                if (minYear <= movie.release_date.substring(0, 4)) {
                    return movie;
                }
            })
        }
        else if (maxYear) {
            sortedYear = sortedRating.filter((movie) => {
                if (movie.release_date.substring(0, 4) <= maxYear) {
                    return movie;
                }
            })
        }
        if (sortedYear.length == 0) { sortedYear = sortedRating }
        this.setState({ filteredMovies: sortedYear });
        this.setState({ showFiltered: true });

    }

    clearFilter = () => {
        this.setState({ filteredMovies: {}, showFiltered: false });
    }

    filterTitle = (movieArray) => {
        movieArray.sort((a, b) => {
            var x = a.title.toLowerCase();
            var y = b.title.toLowerCase();
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        })
        this.setState({ filteredMovies: movieArray });
    }

    filterYear = (movieArray) => {
        movieArray.sort((a, b) => {
            var x = a.release_date.substring(0, 4);
            var y = b.release_date.substring(0, 4);
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        })
        this.setState({ filteredMovies: movieArray });
    }

    filterRating = (movieArray) => {
        movieArray.sort((a, b) => {
            var x = a.ratings.average;
            var y = b.ratings.average;
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        })
        this.setState({ filteredMovies: movieArray });
    }

    render() {
        if (this.props.loaded) {
            if (!this.state.showFiltered) {
                return (
                    <section className='main'>
                        <Header />
                        <Favorites favs={this.props.favsList} delete={this.deleteFav} />
                        <MovieList loaded={this.props.loaded} filterRating={this.filterRating} filterYear={this.filterYear} filterTitle={this.filterTitle} favsList={this.props.favsList} movies={this.props.movies} addFav={this.addFav} filterMovie={this.filterMovie} clearFilter={this.clearFilter} />
                    </section>
                );
            }
            else {
                return (
                    <section className='main'>
                        <Header />
                        <Favorites favs={this.props.favsList} delete={this.deleteFav} />
                        <FilteredMovieList loaded={this.props.loaded} filterRating={this.filterRating} filterYear={this.filterYear} filterTitle={this.filterTitle} favsList={this.props.favsList} movies={this.state.filteredMovies} addFav={this.addFav} filterMovie={this.filterMovie} clearFilter={this.clearFilter} />
                    </section >
                );
            }
        } else {
            return (
                <div>
                    <Header />
                    <Favorites favs={this.props.favs} />
                    <span><i className="fas fa-spinner fa-spin"></i></span>

                </div>
            );

        }
    }


}

export default DefaultView;