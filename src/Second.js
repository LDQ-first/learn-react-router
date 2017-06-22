import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


export default ({match}) => (
   <Router>
        <div>
            <h2>账号</h2>
            <ul>
                <li><Link to={`${match.url}/react-router`}>React Router</Link></li>
                <li><Link to={`${match.url}/leoashin`}>LeoAshin</Link></li>
                <li><Link to={`${match.url}/justjavac`}>justjavac</Link></li>
                <li><Link to={`${match.url}/reacttraining`}>React Training</Link></li>
            </ul>

            <Route path={`${match.url}/:id`} component={Child}/>
        </div>
   </Router>
)

const Child = ({match}) => (
    <div>
        <h3>ID: {match.params.id}</h3>
    </div>
)