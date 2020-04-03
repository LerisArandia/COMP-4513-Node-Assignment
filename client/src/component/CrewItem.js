import React from 'react';

class CrewItem extends React.Component {
    render(){
        return(
            <li key={this.props.key} className='tab-items'>
                <div>{this.props.crew.department}</div>
                <div>{this.props.crew.job}</div>
                <div>{this.props.crew.name}</div>
            </li>
        );
    }
}
export default CrewItem