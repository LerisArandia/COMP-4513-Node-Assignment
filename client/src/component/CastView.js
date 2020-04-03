import React from 'react';
import '../css/CastView.css';

class CastView extends React.Component {

    constructor(props) {
        super(props);
        this.state = { castMember: {}, loaded: false }
        this.state.id = this.props.id;
    }

    async componentDidMount() {
        try {
            this.setState({ loaded: false });
            console.log(this.state.id + " id in cast view");
            const url = `https://api.themoviedb.org/3/person/${this.state.id}?api_key=667f3dca4968c359e3471957010e6209`; // this.props.cast_id

            const response = await fetch(url);
            const jsonData = await response.json();

            this.setState({ castMember: jsonData, loaded: true });


        } catch (error) {
            console.error(error);
        }
    }

    close = () => {
        this.props.close();
    }

    render() {
        if (this.state.loaded) {
            console.log(this.state.castMember.id + " cast member in cast view");

            let birthday, biography, placeOfBirth, image = "";
            const imgUrl = `https://image.tmdb.org/t/p/w342${this.state.castMember.profile_path}`;
            const imdbLink = `https://www.imdb.com/name/${this.state.castMember.imdb_id}`;

            if (this.state.castMember.birthday) { birthday = this.state.castMember.birthday } else { birthday = "No birthday information available." }
            if (this.state.castMember.biography) { biography = this.state.castMember.biography } else { biography = "No biography information available." }
            if (this.state.castMember.place_of_birth) { placeOfBirth = this.state.castMember.place_of_birth } else { placeOfBirth = "No place of birth information available." }
            if (this.state.castMember.profile_path) { image = <img id="cast-image" src={imgUrl} /> } else (image = <i className="fas fa-user-times fa-7x"  ></i>)

            console.log(this.state.castMember);

            return (
                <div id="cast-view">
                    <div id="cast-view-photo">
                        <h2>{this.state.castMember.name}</h2>
                        <figure>
                            {image}
                        </figure>
                    </div>
                    <div id="cast-view-info">
                        <div>
                            <div><b>Birthday: </b>{birthday}</div>
                            <div id="biography">{biography}</div>
                            <div id="placeOfBirth"><b>Place of birth: </b>{placeOfBirth}</div>
                        </div>
                        <button><a href={imdbLink}>IMDB</a></button>

                        <button onClick={this.close}>Close Cast View</button>

                    </div>

                </div>
            )
        } else {
            return (<span><i className="fas fa-spinner fa-spin"></i></span>);
        }
    }
}
export default CastView;
