import React from 'react';
import { Link, Route } from 'react-router-dom';

function Topic({ match }) {
    return <div className="alert alert-primary">{ match.params.topicId }</div>
}

export default function Topics({ match }) {
    return (
    <div className="row">
    <div className="col-md-12">
    <h3>Topics</h3>
    <ul className="list-group">
        <Link to= {`${match.url}/dynmic-router`} className="list-group-item">Dynamic Router</Link>
        <Link to= {`${match.url}/components`} className="list-group-item">Components</Link>
        <Link to= {`${match.url}/props-vs-state`} className="list-group-item">Props vs State</Link>
    </ul>

    <Route path={`${match.path}/:topicId`} component= { Topic }/>
    <Route exact path={ match.path } render = {()=> {
        return <div className="alert alert-danger" role="alert">Please select topic.</div>
    }}/>
    </div>
    </div>)
}