import React, {Component} from 'react';
import './App.scss';
import 'select2/dist/css/select2.min.css';
import 'select2/dist/js/select2.min';
import 'jquery/dist/jquery.min';
import * as JQuery from 'jquery';

const $ = JQuery;

class PageAddJobs extends Component {

    state = {
        titre: null,
        entreprise: null,
        skills: [],
        url: null,
        description: null,
    };
    change = e => {
        if (e.target.id === "skills") {
            this.state.skills = [].filter.call(e.target.options, o => o.selected).map(o => o.value);
        } else {
            this.setState({
                [e.target.id]: e.target.value
            });
        }
    };
    submit = e => {
        e.preventDefault();

        fetch('http://127.0.0.1:8000/api/jobs', {
            method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
                "title": this.state.titre,
                "company": this.state.entreprise,
                "skills": this.state.skills,
                "url": this.state.url,
                "description": this.state.description,
            })
        });
    };

    render() {
        const skills = this.props.skills.map(skill => <option value={"/api/skills/" + skill.id}
                                                              key={skill.id}>{skill.name}</option>);


        $(document).ready(function () {


            $("#skills").select2({
                tags: true,
                tokenSeparators: ['/', ',', ';', " "],
                width: '100%',
            });

        });
        return (
            <div className="blocdevs">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Ajouter une offre</h1>
                        <div className="articlesdev">
                            <form className="mx-auto" onSubmit={this.submit}>
                                <div className="form-group">
                                    <label htmlFor="titre">Titre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="titre"
                                        onChange={this.change}
                                        placeholder=""/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="entreprise">Entreprise</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="entreprise"
                                        onChange={this.change}
                                        placeholder=""/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="skills">Compétences</label>
                                    <select className="skills" id="skills" multiple={true}
                                            onChange={this.change}>
                                        {skills}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="url">URL</label>
                                    <input type="text"
                                           className="form-control"
                                           id="url"
                                           onChange={this.change}
                                           placeholder=""/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                                    <textarea type="textarea"
                                              className="form-control"
                                              id="exampleFormControlTextarea1"
                                              onChange={this.change}
                                              placeholder=""/>
                                </div>
                                <button className="btn btn-primary" value="submit">Ajouter</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageAddJobs;