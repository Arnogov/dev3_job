import React, {Component} from 'react';
import JobCard from "./JobCard";

class JobList extends Component {


    render() {
        if (this.props.jobs.length === 0) {
            return <div>Chargement en cours...</div>
        }
        const jobs = this.props.jobs.map((job, key) => <li key={key}><JobCard job={job}/></li>);

        return (
            <div className="Jobs">
                <p>Venire pro haec sollicitas Parthicarum impetus taliaque taliaque pro summo.</p>
                <ul>
                    {jobs}
                </ul>
            </div>
        );
    }
}

export default JobList;