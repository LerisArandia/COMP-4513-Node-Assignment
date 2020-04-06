import React from 'react';
import DefaultView from './component/DefaultView.js';
import './App.css';
import Home from "./component/Home.js";
import MovieDetailsView from "./component/MovieDetailsView.js";
import { Route, Switch } from 'react-router-dom';
import Profile from "./component/Profile.js";
// import CastView from "./component/CastView.js";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group'; // Used this Tutorial https://www.youtube.com/watch?v=NUQkajBdnmQ , https://github.com/Ihatetomatoes/react-router-page-transition-css
import Modal from 'react-modal';

Modal.setAppElement('#root');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
    this.state.favorites = [];
    this.state.loaded = false;
  }

  async componentDidMount() {
    try {
      if (JSON.parse(localStorage.getItem("movies"))) {

        this.setState({
          movies: JSON.parse(localStorage.getItem("movies"))
        });
        this.setState({ loaded: true });
      }
      else {
        const url = "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";

        //const url = "/api/brief";

        const response = await fetch(url);
        const jsonData = await response.json();
        localStorage.setItem("movies", JSON.stringify(jsonData));
        this.setState({ movies: jsonData, loaded: true });
      }

    } catch (error) {
      console.error(error);
    }
  }


  addToFavorite = (poster) => {
    let value = false;
    console.log(poster);
    for (let c of this.state.favorites) {
      if (c.poster === poster.poster) {
        value = true;
      }
    }

    if (value === false) {
      const data = this.state.favorites;
      data.push(poster);
      this.setState({ favorites: data });
    }
  }

  deleteFromFavorite = (poster) => {
    console.log("To be delated: " + poster);
    const fav = this.state.favorites;
    for (let c = 0; c < fav.length; c++) {
      if (fav[c].poster === poster.poster) {
        fav.splice(c, 1);
      }
    }

    this.setState({ favorites: fav });

  }

  render() {
    if (this.state.loaded) {
      return (
        <main>
          {/* Used this Tutorial https://www.youtube.com/watch?v=NUQkajBdnmQ , https://github.com/Ihatetomatoes/react-router-page-transition-css */}
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={{ enter: '300', exit: '300' }}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route path="/home" exact component={Home} />
                  <Route path="/default" exact render={() =>
                    <DefaultView loaded={this.state.loaded} movies={this.state.movies} favsList={this.state.favorites} addsFav={this.addToFavorite} deletesFav={this.deleteFromFavorite} />
                  } />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/moviedetails" exact component={MovieDetailsView} />
          {/* <Route path="/castview" exact component={CastView} /> */}
          {/* <DefaultView movies={this.state.movies} addsFav={this.addToFavorite} /> */}
        </main>
      );
    }
    else {
      return (<span stle={{ textAlign: 'center' }}><i className="fas fa-spinner fa-spin fa fa-7x"></i></span>);
    }
  }

}
export default App;
