import React, {Component} from 'react';
import 'moment/locale/fr';
import moment from "moment";

class JobCard extends Component {
    render() {

        const {job} = this.props;
        const skills = this.props.job.skills.map(skill => <li key={skill.id}>{skill.name}</li>);

        return (
            <div>
                <h2>{job.title}</h2>
                <p>{job.company}</p>
                <ul>{skills}</ul>
                <p>Offre ajoutée le : {moment(this.props.createdAt).format("Do MMMM YYYY")}</p>
            </div>
        );
    }
}

export default JobCard;