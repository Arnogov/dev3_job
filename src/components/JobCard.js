import React, {Component} from 'react';

class JobCard extends Component {
    render() {

        const {job} = this.props;
        const skills = this.props.job.skills.map(skill => <li key={skill.id}>{skill.name}</li>);

        return (
            <div>
                <h2>{job.title}</h2>
                <p>{job.company}</p>
                <ul>{skills}</ul>
                <p>Offre ajoutée le : {job.createdAt}</p>
            </div>
        );
    }
}

export default JobCard;