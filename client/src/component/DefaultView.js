import React from 'react';
import MovieList from './MovieList.js';
import Header from './HeaderApp.js';
import FilteredMovieList from './FilteredMovieList.js';
import Favorites from './Favorites.js';

<<<<<<< HEAD
import { Layout } from 'antd';

=======
>>>>>>> 716ab5df56f652b089beea63220cc8611bb5006b
class DefaultView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movies: this.filterTitle(this.props.movies), loaded: false };
<<<<<<< HEAD
        this.state = { title: "", yearBefore: "", ratingBefore: "" };
=======
//        this.state = { title: "", yearBefore: "", ratingBefore: "" };
        this.state.title = '';
        this.state.minYear = '';
        this.state.maxYear = '';
        this.state.minRating = '';
        this.state.maxRating = '';
>>>>>>> 716ab5df56f652b089beea63220cc8611bb5006b
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

<<<<<<< HEAD
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
=======
        if(title)
            {
                console.log("******   " + title);
        
        
                this.setState({title: title},  function() {console.log(this.state.title)});
        
                const url = `/api/find/title/${title}`;
//                const url = `/api/movies/2`;
//        const url = "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";
                console.log("IN mount");
                
            fetch(url)
                .then(function(response){
                return response.json();
            })
            .then( data => {
                let sortedMovies = data.sort((a,b) => {
                    return a.title < b.title ? -1 : 1;
                })
                
                this.setState({ filteredMovies: sortedMovies, showFiltered: true });
        })
            };
        
        if(minYear || maxYear)
            {
                console.log(minYear);
        
                this.setState({minYear: minYear , maxYear: maxYear});
                const url = `api/find/year/${minYear}/${maxYear}`;
                
            fetch(url)
                .then(function(response){
                return response.json();
                })
                .then( data => {
                 
                data.sort((a,b) => {
                    var x = a.release_date.substring(0,4);
                    var y = b.release_date.substring(0,4);
                    if(x < y) {return -1;}
                    if( x > y) {return 1;}
                    return 0;
                })

                    console.log(data);
                    this.setState({ filteredMovies: data, showFiltered: true });
                })
            }
        
        if(minRating || maxRating)
            {
                
                console.log(minYear);
        
                this.setState({minRating: minRating , maxRating: maxRating});
                const url = `api/find/rating/${minRating}/${maxRating}`;
                
            fetch(url)
                .then(function(response){
                return response.json();
                })
                .then( data => {
                 
                data.sort((a,b) => {
                    var x = a.rating;
                    var y = b.rating;
                    if(x < y) {return -1;}
                    if( x > y) {return 1;}
                    return 0;
                })

                    console.log(data);
                    this.setState({ filteredMovies: data, showFiltered: true });
                })
            }

        
    }   
    
    
    

    


>>>>>>> 716ab5df56f652b089beea63220cc8611bb5006b

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
<<<<<<< HEAD
        const { Content } = Layout;
        if (this.props.loaded) {
            if (!this.state.showFiltered) {
                return (
                    <Layout className="layout">
                        <Header />
                        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                            <Favorites favs={this.props.favsList} delete={this.deleteFav} />
                            <MovieList loaded={this.props.loaded} filterRating={this.filterRating} filterYear={this.filterYear} filterTitle={this.filterTitle} favsList={this.props.favsList} movies={this.props.movies} addFav={this.addFav} filterMovie={this.filterMovie} clearFilter={this.clearFilter} />
                        </Content>
                    </Layout>
=======
        if (this.props.loaded) {
            if (!this.state.showFiltered) {
                return (
                    <section className='main'>
                        <Header />
                        <Favorites favs={this.props.favsList} delete={this.deleteFav} />
                        <MovieList loaded={this.props.loaded} filterRating={this.filterRating} filterYear={this.filterYear} filterTitle={this.filterTitle} favsList={this.props.favsList} movies={this.props.movies} addFav={this.addFav} filterMovie={this.filterMovie} clearFilter={this.clearFilter} />
                    </section>
>>>>>>> 716ab5df56f652b089beea63220cc8611bb5006b
                );
            }
            else {
                return (
<<<<<<< HEAD
                    <Layout className="layout">
                        <Header />
                        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                            <Favorites favs={this.props.favsList} delete={this.deleteFav} />
                            <FilteredMovieList loaded={this.props.loaded} filterRating={this.filterRating} filterYear={this.filterYear} filterTitle={this.filterTitle} favsList={this.props.favsList} movies={this.state.filteredMovies} addFav={this.addFav} filterMovie={this.filterMovie} clearFilter={this.clearFilter} />
                        </Content>
                    </Layout>
=======
                    <section className='main'>
                        <Header />
                        <Favorites favs={this.props.favsList} delete={this.deleteFav} />
                        <FilteredMovieList loaded={this.props.loaded} filterRating={this.filterRating} filterYear={this.filterYear} filterTitle={this.filterTitle} favsList={this.props.favsList} movies={this.state.filteredMovies} addFav={this.addFav} filterMovie={this.filterMovie} clearFilter={this.clearFilter} />
                    </section >
>>>>>>> 716ab5df56f652b089beea63220cc8611bb5006b
                );
            }
        } else {
            return (
<<<<<<< HEAD
                <Layout className="layout">
                    <Header />
                    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                        <Favorites favs={this.props.favs} />
                        <span><i className="fas fa-spinner fa-spin"></i></span>
                    </Content>
                </Layout>
=======
                <div>
                    <Header />
                    <Favorites favs={this.props.favs} />
                    <span><i className="fas fa-spinner fa-spin"></i></span>

                </div>
>>>>>>> 716ab5df56f652b089beea63220cc8611bb5006b
            );

        }
    }


}

export default DefaultView;