import React from 'react';

class CastItem extends React.Component {
    castView = () => {
        console.log(this.props.cast.id + "id in cast item");
        this.props.view(this.props.cast.id);
    }

    render() {
        return (
            <li key={this.key} className='tab-items'>
                <div>{this.props.cast.character}</div>
                <div>{this.props.cast.name}</div>
                <button onClick={this.castView}>View</button>
            </li>
        );
    }
}
export default CastItem