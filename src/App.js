import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import JobList from "./components/JobList";
import PageAddJobs from "./components/PageAddJobs";
import Home from "./components/Home";
import {Route} from "react-router";
import './App.scss';
import Loading from "./components/Loading";
import PageJobs from "./components/PageJobs";

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
                <h1>Dev Jobs</h1>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-brand">
                        <ul className="navbar">
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
            </main>
        );
    }
}

export default App;