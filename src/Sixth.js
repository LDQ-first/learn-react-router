import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

export default ({match}) => (
    <Router>
        <div>
            <ul>
                <li><Link to={`${match.url}/`}>主页</Link></li>
                <li><Link to={`${match.url}/old-match`}>旧链接，会被重定向</Link></li>
                <li><Link to={`${match.url}/will-match`}>这个链接可以被匹配到</Link></li>
                <li><Link to={`${match.url}/will-not-match`}>这个链接不能被匹配到</Link></li>
                <li><Link to={`${match.url}/also/will/not/match`}>这个链接也不能被匹配到</Link></li>
            </ul>
            <Switch>
                <Route path={`${match.url}/`} exact component={Home}/>
                <Redirect from={`${match.url}/old-match`} to={`${match.url}/will-match`}/>
                <Route path={`${match.url}/will-match`} component={WillMatch}/>
                <Route component={NoMatch}/>
            </Switch>
        </div>
    </Router>
)

const Home = () => (
  <p>
    <code> &lt;Switch> </code>会渲染它里面的第一个可以匹配的
    <code> &lt;Route> </code>，而且一个没有<code> path </code>的
    <code> &lt;Route> </code> 会满足任何匹配。
  </p>
)

const WillMatch = () => <h3>匹配到了！</h3>

const NoMatch = ({ location }) => (
  <div>
    <h3>无法匹配 <code>{location.pathname}</code></h3>
  </div>
)