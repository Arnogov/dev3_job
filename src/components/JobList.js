import React, {Component} from 'react';
import JobCard from "./JobCard";


class JobList extends Component {

    state = {job:{}}

    AddView(job) {

    }


    render() {
        if (this.props.jobs.length === 0) {
            return <div>Chargement en cours...</div>
        }
        const jobs = this.props.jobs.map((job, key) =>
            <li key={key}><JobCard job={job}/>

            </li>);

        return (
            <div className="Jobs">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <ul>
                    {jobs}
                </ul>
            </div>
        );
    }
}

export default JobList;