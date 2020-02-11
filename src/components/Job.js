import React, {Component} from 'react';
import {  withRouter } from "react-router";

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
        return (
            <div>
                <h1>Job: {this.state.job.title}</h1>

                <div>
                    <li>{this.state.job.title}</li>
                    <li>{this.state.job.company}</li>
                    <li>{this.state.job.url}</li>
                    {this.state.job.description}
                </div>
            </div>
        );
    }
}

export default withRouter(Job);