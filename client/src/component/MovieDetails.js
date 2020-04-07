import React from "react";
import Ratings from './Ratings.js';
import Modal from 'react-modal';
import ModalHandler from './ModalHandler.js';
import { Row, Col, Divider } from 'antd';

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movieData: [], loaded: false, showModal: false };
    }

    openModal = () => { this.setState({ showModal: true }); }
    closeModal = () => { this.setState({ showModal: false }); }

    render() {
        console.log(this.props.movieData.id);
        const imgUrl = `https://image.tmdb.org/t/p/w185/${this.props.movieData.poster}`;
        let companies, countries, keywords, genres = "";
        if (this.props.movieData.production.companies) {
            companies = this.props.movieData.production.companies.map((company, key) => {
                return <div key={key} id="company">{company.name}</div>;
            })
        } else { companies = <div>No company information available!</div>; }

        if (this.props.movieData.production.countries) {
            countries = this.props.movieData.production.countries.map((country, key) => {
                return <div key={key} id="country">{country.name}</div>;
            })
        } else { countries = <div>No country information available!</div>; }

        if (this.props.movieData.details.keywords) {
            keywords = this.props.movieData.details.keywords.map((keyword, key) => {
                return < div key={key} id="keyword">#{keyword.name}</ div>;
            })
        } else { keywords = <div>No keywords available!</div> }

        if (this.props.movieData.details.genres) {
            genres = this.props.movieData.details.genres.map((genre, key) => {
                return <div key={key} id="genre">{genre.name}</div>;
            })
        } else { genres = <div>No genre information available!</div> }

        return (
            <Row id="details">
                <Modal isOpen={this.state.showModal} overlayClassName="Overlay">
                    <ModalHandler page={"details"} poster={this.props.movieData.poster} closeModal={this.closeModal}></ModalHandler>
                </Modal>

                <Col flex="2" className="detailsCol">
                    <h1>{this.props.movieData.title}</h1>
                    <div id="poster">
                        <img src={imgUrl} onClick={this.openModal} />
                        <div>
                            {this.props.movieData.tagline}<br />({this.props.movieData.runtime} mins)
                        </div>
                    </div>
                </Col>
                <Col flex="3" className="detailsCol">
                    <div style={{ textAlign: 'right' }}>
                        <button onClick={this.addFav} >Add To Favorites</button>
                    </div>
                    <div id="details-details">
                        <div>
                            It was released in {this.props.movieData.release_date} and had a revenue of ${this.props.movieData.revenue}.<br />
                            <a href={"https://www.themoviedb.org/movie/" + this.props.movieData.tmdb_id}>TMDB</a> <a href={"https://www.imdb.com/title" + this.props.movieData.imdb_id}>IMDB</a><br />
                        </div>
                        <div id='details-overview'>
                            {this.props.movieData.details.overview}
                        </div>
                        <b>Popularity: </b>{this.props.movieData.ratings.popularity}<br />
                        <b>Average Rating: </b><Ratings rating={this.props.movieData.ratings.average} />
                        <b>Rating Count: </b>{this.props.movieData.ratings.count}
                    </div>

                    Companies
                    <div id="details-companies">
                        {companies}
                    </div>

                    Countries
                    <div id="details-countries">
                        {countries}
                    </div>

                    Keywords
                    <div id="details-keywords">
                        {keywords}
                    </div>

                    Genre
                    <div id="details-genres">
                        {genres}
                    </div>
                </Col>
            </Row >
        );
    }

    addFav = () => {
        this.props.addFav(this.props.movieData); // change BACK
    }

}
export default MovieDetails;