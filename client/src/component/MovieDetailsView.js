import React from 'react';
import MovieDetails from './MovieDetails';
import HeaderApp from './HeaderApp.js';
import DetailTabs from './DetailTabs.js';
import Favorites from './Favorites.js';
import CastView from './CastView.js';
import "../css/MovieDetails.css";

import { Layout } from 'antd';

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

            const response = await fetch(url);
            const jsonData = await response.json();

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
        let component = "";

        const { Content, Footer } = Layout;

        if (!this.state.showCast) {
            component = <MovieDetails movieData={this.state.movieData} addFav={this.addToFav} />;
        } else { component = <CastView id={this.state.castMember} close={this.castViewOff} />; }


        if (this.state.loaded) {
            return (
                <Layout className="layout">
                    <HeaderApp />
                    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                        <Favorites favs={this.state.favs} delete={this.deleteFav} />
                        <div id="movie-details">
                            {component}
                            <DetailTabs movieData={this.state.movieData} toggle={this.castViewOn} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>COMP 4513 Assignment 2 ©2018 Created by Leris Arandia, Jamie Wong, Natnael Beshawered</Footer>
                </Layout>
            );
        }
        else {
            return (
                <Layout className="layout">
                    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                        <HeaderApp />
                        <Favorites favs={this.state.favs} delete={this.deleteFav} />
                        <span><i className="fas fa-spinner fa-spin"></i></span>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>COMP 4513 Assignment 2 ©2018 Created by Leris Arandia, Jamie Wong, Natnael Beshawered</Footer>
                </Layout>
            );
        }
    }
}
export default MovieDetailsView;
