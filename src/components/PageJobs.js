import React, {Component} from 'react';
import JobList from "./JobList";


class PageJobs extends Component {
    render() {

        const {jobs} = this.props;

        return (
            <div className="List">

                <h1>Liste des offres</h1>
                <JobList jobs={jobs}/>

            </div>
        );
    }
}

export default PageJobs;