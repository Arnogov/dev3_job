import React, {Component} from 'react';
import 'moment/locale/fr';
import moment from "moment";


class JobCard extends Component {
    render() {

        const {job} = this.props;
        const skills = this.props.job.skills.map(skill => <span className="badge badge-success"><div
            key={skill.id}>{skill.name}</div></span>);


        return (
            <div className="jobcard">
                <h2>{job.title}</h2>
                <span className="badge badge-primary"><p>{job.company}</p></span>
                <div>{skills}</div>
                <p>Offre ajoutée le {moment(this.props.createdAt).format("Do MMMM YYYY")}</p>
                <a href={"Job/" + job.id}><img src="oeil.png" alt="oeil"/></a>
            </div>
        );
    }
}

export default JobCard;