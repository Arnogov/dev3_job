import React, {Component} from 'react';
import {  withRouter } from "react-router";
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

        fetch('http://127.0.0.1:8000/api/jobs/'+this.props.match.params.identifiant)
            .then(response => response.json())
            .then(data => this.setState({job: data, loading: false}))
    }
    render() {


        if(this.state.loading) {
            return <div>Chargement en cours</div>;
        }

        const skills = this.state.job.skills.map(skill => <li key={skill.id}>{skill.name}</li>);

        return (
            <div>
                <h1>{this.state.job.title}</h1>

                <div>
                    <li>Offre ajoutée le {moment(this.props.createdAt).format("Do MMMM YYYY")}</li>
                    <li>Voir l'offre : {this.state.job.company}</li>
                    <li>{this.state.job.url}</li>
                    {this.state.job.description}
                    {skills}
                </div>
            </div>
        );
    }
}

export default withRouter(Job);