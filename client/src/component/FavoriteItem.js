import React from 'react';
// import Favorites from './FavoriteItem.js';
import { Link } from 'react-router-dom';


class FavoriteItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.state = {
            hovering: false
        };
    }

    delete = () => {
        console.log('delete favItem');
        this.props.deleteFav(this.props.poster);
    }

    handleHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            hovering: !state.hovering,
        };
    }

    render() {
        return (
            <div id="favImg"
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}>
                <Link to={{
                    pathname: '/moviedetails',
                    state: { id: this.props.poster.id, favsList: this.props.favsList }
                }}>
                    <img src={`https://image.tmdb.org/t/p/w92/${this.props.poster.poster}`} style={{ margin: '0.3em' }} />
                </Link>
                {this.state.hovering && <div id="favDelete" onClick={this.delete}>&#10006;</div>}
            </div>
        )
    }
}

export default FavoriteItem;