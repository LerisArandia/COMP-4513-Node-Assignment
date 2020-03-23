import React from 'react';
import About from './About.js';

export default class ModalHandler extends React.Component {

    render() {
        if (this.props.page === "details") { // poster modal for movie details page
            const imgUrl = `https://image.tmdb.org/t/p/w780/${this.props.poster}`;

            return (
                <div style={{ textAlign: 'center' }}>
                    <span onClick={this.props.closeModal}>
                        <i className="fas fa-backspace fa-2x" style={{
                            marginLeft: 'auto',
                            position: 'absolute',
                            top: '8px',
                            right: '16px'
                        }}></i>
                    </span>
                    <img src={imgUrl} onClick={this.props.closeModal} />
                </div >
            )

        }
        else if (this.props.page === "about") {
            return (
                <div style={{ textAlign: 'center' }}>
                    <span onClick={this.props.closeModal}>
                        <i className="fas fa-backspace fa-2x" style={{
                            marginLeft: 'auto',
                            position: 'absolute',
                            top: '8px',
                            right: '16px'
                        }}></i>
                    </span>
                    <About />
                </div>
            )
        }
    }



}

