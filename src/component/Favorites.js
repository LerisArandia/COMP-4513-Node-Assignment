import React from 'react';
// import MovieList from './MovieList.js';
import FavoriteItem from './FavoriteItem.js';
// import { findByLabelText } from '@testing-library/react';
import '../css/favorites.css';

class Favorites extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showContent: true };
    }

    toggleContent = () => {
        let curr = this.state.showContent;
        this.setState({ showContent: !curr });
    }

    render() {
        let content = <div></div>;
        let icon = <i className="fas fa-plus"></i>;

        if (this.state.showContent) {
            content = this.props.favs.map((p, index) => <FavoriteItem key={index} poster={p} favsList={this.props.favs} deleteFav={this.props.delete}></FavoriteItem>);
            icon = <i className="fas fa-chevron-up"></i>;
        }

        return (
            <div className="favorites" >
                <div style={{ position: 'relative' }}>

                    <h2 style={{ padding: '0.5em' }}>Favorites</h2>
                    <div className='collapsible' onClick={this.toggleContent}>
                        {icon}
                    </div>
                    <div id="favList" className='collapsible-content'>
                        {content}
                    </div >
                </div>
            </div>
        )
    }
}

export default Favorites;