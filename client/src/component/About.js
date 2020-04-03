import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div style={{
                padding: '5em'
            }}>
                <h1>About Us!</h1>
                <div>
                    <h3>Who are We?</h3>
                    <div>Leris Arandia, Jamie Wong, & Natnael Beshawered </div>
                </div>
                <div>
                    <h3>What is this?</h3>
                    <div>A COMP 4513 Assignment using React. It's essentially a movie database website. Using this, one can browse movies, filter through them, and find out more information about each one. Information for cast and crew can be found as well. Enjoy your stay.</div>
                </div>
                <div>
                    <h3>Github?</h3>
                    <div> Yes. <a href="https://github.com/nbesh761/COMP-4513-React-Assignment">https://github.com/nbesh761/COMP-4513-React-Assignment</a> (It's private ..)</div>
                </div>
                <div>
                    <h3>What was used?</h3>
                    <div>
                        VS Code, Brackets, GitHub
                    </div>
                </div>
            </div>
        )
    }
}