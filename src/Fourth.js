import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


export default ({match}) => (
    <Router>
        <div>
            <OldSchoolMenuLink activeOnlyWhenExact={true} to={`${match.url}/`} label='首页' />
            <OldSchoolMenuLink to={`${match.url}/about`} label='关于'/>
            <hr/>
            <Route exact path={`${match.url}/`} component={Home}/>
            <Route path={`${match.url}/about`} component={About}/>
        </div>
    </Router>
)

const OldSchoolMenuLink = ({label, to, activeOnlyWhenExact}) => (
    <Route path={to} exact={activeOnlyWhenExact} children={
        ({match}) => (
            <div className={match ? 'active': ''}>
                {match ? '>' : ''}
                <Link to={to}>{label}</Link>
            </div> 
        )
    }/>
)

const Home = () => (
  <div>
    <h2>首页</h2>
  </div>
)

const About = () => (
  <div>
    <h2>关于</h2>
  </div>
)

