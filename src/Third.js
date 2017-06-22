import React, {Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'
import PropTypes from 'prop-types'

// 流程简介：
// 1. 点击「public 页面」
// 2. 点击 「protected 页面」
// 3. 登入
// 4. 点击后退，并且在每一步过程中观察URL的变化

export default ({match}) => (
    <Router>
        <div>
           <AuthButton/> 
            <ul>
                <li><Link to={`${match.url}/public`}>公开页面</Link></li>
                <li><Link to={`${match.url}/protected`}>非公开页面</Link></li>
            </ul>
            <Route path={`${match.url}/public`} component={Public}/>
            <Route path={`${match.url}/login`} component={Login}/>
            <PrivateRoute match={match} path={`${match.url}/protected`} component={Protected}/>
        </div>
    </Router>
)

const Public = () => <h3>公开的页面</h3>
const Protected = () => <h3>非公开的页面</h3>

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)   // 模拟异步。
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)   // 模拟异步。
    }
}


const AuthButton = withRouter(({history, location, match}) => (
    fakeAuth.isAuthenticated ? (
        <p>
            {console.log('history: ', history)}
            {console.log('location: ', location)}
            {console.log('match: ', match)}
            欢迎！<button onClick={() => {
                fakeAuth.signout( () => { history.push(`${location.pathname.replace(/(\/[^\/]*$)/,'')}`) } )
            }}>登出</button>
        </p>
    ) : (
        <p>请先登录</p>
    )
))

const PrivateRoute = ({match, component, ...rest}) => (
    <Route {...rest} render={
        props => (
            fakeAuth.isAuthenticated ? (
                React.createElement(component, props)
            ) : (
                <Redirect to={{
                    pathname: `${match.url}/login`,
                    state: {from: props.location}
                }}/>
            )
        )
    } />
)



class Login extends Component {
    static propTypes = {
        location: PropTypes.object,
        match: PropTypes.object,
        history: PropTypes.object,
    }

    state = {
        redirectToReferrer: false
    }

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({
                redirectToReferrer: true
            })
        })
    }

    render() {
        console.log(this.props)

        const {from} = this.props.location.state || {from: {pathname: '/'}}
        const {redirectToReferrer} = this.state

        if(redirectToReferrer) {
            return (
                <Redirect to={from}/>
            )
        }

        return (
            <div>
                <p>若想访问 {from.pathname} ，你需要先登录</p>
                <button onClick={this.login}>登录</button>
            </div>
        )
    }

}
