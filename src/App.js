import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import PageAddJobs from "./components/PageAddJobs";
import {Route} from "react-router";
import './App.scss';
import PageJobs from "./components/PageJobs";
import Job from "./components/Job";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            loading: true
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/jobs')
            .then(response => response.json())
            .then(data => this.setState({jobs: data["hydra:member"], loading: false}))
    }

    render() {

        if (this.state.loading) {
            return <loading/>
        }
        return (
            <main className="main-container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-brand">
                        <ul className="navbar">
                            <h1>Dev Jobs</h1>
                                <li className="nav-link"><NavLink to="/Home">Accueil</NavLink></li>
                                <li className="nav-link"><NavLink to="/JobList">Offres d'emploi</NavLink></li>
                                <li className="nav-link"><NavLink to="PageAddJobs">Ajouter une offre</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <Route path="/JobList">
                    <PageJobs jobs={this.state.jobs}/>
                </Route>
                <Route path="/PageAddJobs" component={PageAddJobs}/>
                <Route path="/Job/:identifiant">
                    <Job/>
                </Route>
            </main>
        );
    }
}

export default App;