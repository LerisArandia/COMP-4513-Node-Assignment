import React from 'react';
import '../css/MovieFilter.css';
import { slide as Menu } from 'react-burger-menu';

class MovieFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { yearRadio: {}, ratingRadio: {} };

        this.title = React.createRef();

        this.yearBeforeRadio = React.createRef();
        this.yearBefore = React.createRef();
        this.yearAfterRadio = React.createRef();
        this.yearAfter = React.createRef();
        this.yearBetweenRadio = React.createRef();
        this.yearMin = React.createRef();
        this.yearMax = React.createRef();

        this.ratingBelowRadio = React.createRef();
        this.ratingBelow = React.createRef();
        this.ratingAboveRadio = React.createRef();
        this.ratingAbove = React.createRef();
        this.ratingBetweenRadio = React.createRef();
        this.ratingMin = React.createRef();
        this.ratingMax = React.createRef();
    }

    filterRating = () => { this.props.filterRating(this.props.movieList); }
    filterYear = () => { this.props.filterYear(this.props.movieList); }
    filterTitle = () => { this.props.filterTitle(this.props.movieList); }

    handleSubmit = (e) => {
        e.preventDefault();

        let titleValue = "";
        let minYear = "";
        let maxYear = "";
        let minRating = "";
        let maxRating = "";

        if (this.title.current.value !== "") {
            titleValue = `${this.title.current.value}`;
            console.log("has title");
        }

        if (this.state.yearRadio === "yearBefore") {
            maxYear = this.yearBefore.current.value;
        }
        else if (this.state.yearRadio === "yearAfter") {
            minYear = this.yearAfter.current.value;
        }
        else if (this.state.yearRadio === "yearBetween") {
            minYear = this.yearMin.current.value;
            maxYear = this.yearMax.current.value;
        }

        if (this.state.ratingRadio === "ratingBelow") {
            maxRating = this.ratingBelow.current.value;
        }
        else if (this.state.ratingRadio === "ratingAbove") {
            minRating = this.ratingAbove.current.value;
        }
        else if (this.state.ratingRadio === "ratingBetween") {
            minRating = this.ratingMin.current.value;
            maxRating = this.ratingMax.current.value;
        }


        this.props.filterMovie(titleValue, minYear, maxYear, minRating, maxRating);
    }

    render() {
        return (
            <Menu >
                <h1>Movie Filter</h1>

                <form onSubmit={this.handleSubmit}>

                    <div className="filterTitle">
                        <h4 onClick={this.filterTitle}>Title</h4>
                        <input type="text" name="title" ref={this.title} />
                    </div>

                    <div className="filterYear">
                        <h4 onClick={this.filterYear}>Year</h4>
                        <div className="yearBox">
                            <div>
                                <input type="radio" name="yearBefore" checked={this.state.yearRadio === "yearBefore"} onChange={this.consoleYear} ref={this.yearBeforeRadio} />
                                <label>Before</label>
                                <input type="text" name="beforeNum" ref={this.yearBefore} />
                            </div>

                            <div>
                                <input type="radio" name="yearAfter" checked={this.state.yearRadio === "yearAfter"} onChange={this.consoleYear} ref={this.yearAfterRadio} />
                                <label>After</label>
                                <input type="text" name="afterNum" ref={this.yearAfter} />
                            </div>

                            <div>
                                <input type="radio" name="yearBetween" checked={this.state.yearRadio === "yearBetween"} onChange={this.consoleYear} ref={this.yearBetweenRadio} />
                                <label>Between</label>
                                <input type="text" name="beforeNum" ref={this.yearMin} />
                                <input type="text" name="beforeNum" ref={this.yearMax} />
                            </div>

                        </div>
                    </div>

                    <div className="filterRating">

                        <h4 onClick={this.filterRating}>Rating</h4>
                        <div className="ratingBox">
                            <div>
                                <input type="radio" name="ratingBelow" checked={this.state.ratingRadio === "ratingBelow"} onChange={this.consoleRating} ref={this.ratingBelowRadio} />
                                <label>Below</label>
                                <input type="text" name="ratingBelow" ref={this.ratingBelow}></input>
                            </div>

                            <div>
                                <input type="radio" name="ratingAbove" checked={this.state.ratingRadio === "ratingAbove"} onChange={this.consoleRating} ref={this.ratingAboveRadio} />
                                <label>Above</label>
                                {/* <input type="text" name="ratingAbove" ref={this.ratingAbove} /> */}
                                <input type="text" name="ratingAbove" ref={this.ratingAbove}></input>
                            </div>

                            <div>
                                <input type="radio" name="ratingBetween" checked={this.state.ratingRadio === "ratingBetween"} onChange={this.consoleRating} ref={this.ratingBetweenRadio} />
                                <label>Between</label>
                                <input type="text" name="minRating" ref={this.ratingMin} />
                                <input type="text" name="maxRating" ref={this.ratingMax} />
                            </div>


                        </div>
                    </div>

                    <div className="filterBox">
                        <button className="filterBtn">Filter</button>
                        <button className="filterBtn" onClick={this.props.clearFilter}>Clear</button>
                    </div>

                </form>
            </Menu>


        );
    }

    consoleYear = (e) => { this.setState({ yearRadio: e.target.name }); }

    consoleRating = (e) => { this.setState({ ratingRadio: e.target.name }); }

}

export default MovieFilter;