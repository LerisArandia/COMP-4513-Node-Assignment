import React from 'react';
import Crew from './CrewTab';
import Cast from './CastTab';
import { Link } from 'react-router-dom';


class DetailTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'cast',
            movieData: []
        };
        this.toggleCast = this.toggleCast.bind(this);
        this.toggleCrew = this.toggleCrew.bind(this);
    }

    toggleCast() {
        if (this.state.tab == 'crew') {
            this.setState({
                tab: 'cast'
            });
        }
    }

    toggleCrew() {
        if (this.state.tab == 'cast') {
            this.setState({
                tab: 'crew'
            });
        }
    }

    render() {
        let view = '';
        if (this.state.tab == 'cast') {
            view = <Cast castData={this.props.movieData.production.cast} view={this.props.toggle} />;
            console.log("cast in details tabs")
            console.log(this.props.movieData.production.cast);
        } else {
            view = <Crew crewData={this.props.movieData.production.crew} />;
            console.log(this.props.movieData.production.crew);
        }
        return (
            <div id="movie-details-column-3">
                <div style={{ textAlign: 'right' }}>
                    <Link to='./default'>
                        <button>Close</button>
                    </Link>
                </div>
                <button className='tab' onClick={this.toggleCast}>Cast</button>
                <button className='tab' onClick={this.toggleCrew}>Crew</button>
                <ul className='tab-list'>{view}</ul>

            </div>
        );
    }
}
export default DetailTabs