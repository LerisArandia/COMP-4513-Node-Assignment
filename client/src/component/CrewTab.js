import React from 'react';
import CrewItem from './CrewItem.js'

class CrewTab extends React.Component {
    render(){
        let crew = '';
        if(this.props.crewData) {
            let data = this.props.crewData;
            data.sort((a,b) => ((a.department > b.department) ? 1 : -1));
            data.sort((a,b) => {
                if(a.department == b.department){
                    return (a.name > b.name) ? 1 : -1;
                }
            })
            crew = data.map((c, key) => {
                return <CrewItem crew={c} key={key}/>
            }) 
        } else { 
            crew = <div>No Crew information available!</div>; 
        }
        return (
            <div>{ crew }</div>
        );
    }
}
export default CrewTab