import React, {Component} from 'react';
import {withRouter} from "react-router";
import moment from "moment";


class Job extends Component {

    constructor(props) {
        super(props);
        this.state = {
            job: {},
            loading: true
        };

    }

    componentDidMount() {

        fetch('http://127.0.0.1:8000/api/jobs/' + this.props.match.params.identifiant)
            .then(response => response.json())
            .then(data => this.setState({job: data, loading: false}))
    }

    render() {


        if (this.state.loading) {
            return <div>Chargement en cours</div>;
        }

        const skills = this.state.job.skills.map(skill => <span className="badge badge-success"><div
            key={skill.id}>{skill.name}</div></span>);

        return (
            <div className="job" col-md-6>
                <h1>{this.state.job.title}</h1>

                <div>
                    <p>Offre ajoutée le {moment(this.props.createdAt).format("Do MMMM YYYY")}</p>
                    <span className="badge badge-primary"><p>{this.state.job.company}</p></span>
                    <p>Voir l'offre : {this.state.job.url}</p>
                    <p>{this.state.job.description}</p>
                    <div>{skills}</div>
                </div>
            </div>
        );
    }
}

export default withRouter(Job);