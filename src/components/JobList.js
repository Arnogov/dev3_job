import React, {Component} from 'react';
import JobCard from "./JobCard";


class JobList extends Component {

    state = {job:{}}

    render() {
        if (this.props.jobs.length === 0) {
            return <div>Chargement en cours...</div>
        }
        const jobs = this.props.jobs.map((job, key) =>
            <div key={key}><JobCard job={job}/>

            </div>);

        return (
            <div className="Jobs">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div>
                    {jobs}
                </div>
            </div>
        );
    }
}

export default JobList;