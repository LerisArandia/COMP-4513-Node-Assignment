import React from 'react';
import MovieDetails from './MovieDetails';
import HeaderApp from './HeaderApp.js';
import DetailTabs from './DetailTabs.js';
import Favorites from './Favorites.js';
import CastView from './CastView.js';
import "../css/MovieDetails.css";

<<<<<<< HEAD
import { Layout } from 'antd';

=======
>>>>>>> 716ab5df56f652b089beea63220cc8611bb5006b
class MovieDetailsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.location.state.id,
            loaded: false,
            showCast: false
        };
        this.state.favs = this.props.location.state.favsList;
        this.state.addFavs = this.props.location.state.addToFavs;
        this.state.movieData = [];
        this.state.castMember = "";
    }

    async componentDidMount() {
        try {
            const url = `https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=${this.props.location.state.id}`;
<<<<<<< HEAD
=======
//            console.log(`${this.props.location.state.id}`);
//            const url = `/api/movies/${this.props.location.state.id}`;
            
>>>>>>> 716ab5df56f652b089beea63220cc8611bb5006b

            const response = await fetch(url);
            const jsonData = await response.json();

<<<<<<< HEAD
=======
            
            console.log(jsonData)
>>>>>>> 716ab5df56f652b089beea63220cc8611bb5006b
            this.setState({ movieData: jsonData, loaded: true });

        } catch (error) {
            console.error(error);
        }
    }

    addToFav = (link) => {
        let value = false;
        console.log(link);
        for (let c of this.state.favs) {
            if (c.poster === link.poster) {
                value = true;
            }
        }

        if (value === false) {
            const data = this.state.favs;
            data.push(link);
            this.setState({ favorites: data });
        }
    }

    deleteFav = (link) => {
        const fav = this.state.favs;
        for (let c = 0; c < fav.length; c++) {
            if (fav[c].poster === link.poster) {
                fav.splice(c, 1);
            }
        }

        this.setState({ favs: fav });
    }

    castViewOn = (cast) => {
        this.setState({ showCast: false });
        console.log("in details view castview on");
        console.log(cast);
        this.setState({ castMember: cast, showCast: true });
    }

    castViewOff = () => {
        if (this.state.showCast) {
            this.setState({ showCast: false });
        }
    }

    render() {
<<<<<<< HEAD
=======

>>>>>>> 716ab5df56f652b089beea63220cc8611bb5006b
        let component = "";
        if (!this.state.showCast) {
            component = <MovieDetails movieData={this.state.movieData} addFav={this.addToFav} />;
        } else { component = <CastView id={this.state.castMember} close={this.castViewOff} />; }


        if (this.state.loaded) {
            return (
<<<<<<< HEAD
                <Layout className="layout">
=======
                <section className='main'>
                    <div>
>>>>>>> 716ab5df56f652b089beea63220cc8611bb5006b
                        <HeaderApp />
                        <Favorites favs={this.state.favs} delete={this.deleteFav} />
                        <div id="movie-details">
                            {console.log(this.state.castMember)}
                            {console.log("^^^^^^^^^^ castMember in details view")}
                            {component}
                            <DetailTabs movieData={this.state.movieData} toggle={this.castViewOn} />
                        </div>
<<<<<<< HEAD
                </Layout>
=======
                    </div>
                </section>
>>>>>>> 716ab5df56f652b089beea63220cc8611bb5006b
            );
        }
        else {
            return (
<<<<<<< HEAD
                <Layout className="layout">
                    <HeaderApp />
                    <Favorites favs={this.state.favs} delete={this.deleteFav} />
                    <span><i className="fas fa-spinner fa-spin"></i></span>
                </Layout>
=======
                <div>
                    <HeaderApp />
                    <Favorites favs={this.state.favs} delete={this.deleteFav} />
                    <span><i className="fas fa-spinner fa-spin"></i></span>
                </div>
>>>>>>> 716ab5df56f652b089beea63220cc8611bb5006b
            );
        }
    }
}
export default MovieDetailsView;
