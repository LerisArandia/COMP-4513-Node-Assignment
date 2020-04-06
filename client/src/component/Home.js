import React from 'react';
import { Link } from 'react-router-dom';
import imgUrl from '../img/cinema.jpg'; /** https://unsplash.com/photos/atsUqIm3wxo **/
import '../css/Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '' };
    }

    searchClick = (e) => {
        e.preventDefault();
        this.setState({ title: e.target.value })
        console.log(this.state.title);
    }

    render() {
        return (
            <section className='main'>
                <div className='banner'
                    style={{
                        backgroundImage: `url(${imgUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    <div className='home-browse'>
                        <div>
                            <h1>Movie Browser</h1>
                            <form>
                                <input type="text" name="title" ref={this.title} className="homeInput" placeholder="Search Movie Title..." onChange={this.searchClick} />
                                <div>
                                    <Link to={{
                                        pathname: '/default',
                                        state: { homeSearch: this.state.title }
                                    }}>
                                        <button className="homebtn">Search Movies</button>
                                    </Link>
                                    <Link to='/default'>
                                        <button className="homebtn">All Movies</button>
                                    </Link>
                                </div>
                            </form>
                        </div>

                    </div>
                    <a id="imgURL" href="https://unsplash.com/photos/atsUqIm3wxo">https://unsplash.com/photos/atsUqIm3wxo</a>
                </div>
            </section>
        );
    }
}
export default Home