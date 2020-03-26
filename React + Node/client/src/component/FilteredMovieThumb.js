import React from "react";
import '../css/MovieThumb.css';
import { Link } from 'react-router-dom';



class FilteredMovieThumb extends React.Component {

    add = () => {
        this.props.addFav(this.props.movie.poster);
    }

    render() {
        const imgURL = `https://image.tmdb.org/t/p/w92/${this.props.movie.poster}`;
        return (
            <div className="movies">
                <figure>
                    <Link to={{
                        pathname: '/moviedetails',
                        state: { id: this.props.id, favsList: this.props.favsList }
                    }}>
                        <img src={imgURL} />
                    </Link>
                </figure>

                <Link to={{
                    pathname: '/moviedetails',
                    state: { id: this.props.id, favsList: this.props.favsList }
                }}>
                    <h3>{this.props.movie.title}</h3> </Link>
                <p>{this.props.movie.year}</p>
                <p>{this.props.rating}</p>
                <p>
                    <button onClick={this.add}>❤</button>
                    <Link to={{
                        pathname: '/moviedetails',
                        state: { id: this.props.id, favsList: this.props.favsList }
                    }}>
                        <button>View</button>
                    </Link>
                </p>
            </div>
        );
    }

}

export default FilteredMovieThumb;