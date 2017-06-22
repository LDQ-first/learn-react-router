import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt
} from 'react-router-dom'


export default ({match}) => (
    <Router>
        <div>
            <ul>
                <li><Link to={`${match.url}/`}>表单</Link></li>
                <li><Link to={`${match.url}/one`}>页面 1</Link></li>
                <li><Link to={`${match.url}/two`} >页面 2</Link></li>
            </ul>
            <Route path={`${match.url}/`} exact component={Form}/>
            <Route path={`${match.url}/one`} render={() => <h3>页面 1</h3>}/>
            <Route path={`${match.url}/two`} render={() => <h3>页面 2</h3>}/>
        </div>
    </Router>
)

class Form extends Component {
    state = {
        isBlocking: false
    }

    render() {
        const { isBlocking } = this.state
        return (
            <form
                onSubmit = {
                    e => {
                        e.preventDefault()
                        e.target.reset()
                        this.setState({
                            isBlocking: false
                        })
                    }
                }
            >
            <Prompt
                when={isBlocking}
                message={
                    location => (
                        `你真的要跳转到 ${location.pathname}么？`
                    )
                }
            />
                <p>
                    是否无法跳转? {isBlocking ? '好，现在试试再试试点击那些链接' : '可以正常跳转'}
                </p>
                
                <p>
                    <input
                        size="50"
                        placeholder="你这里面输入了以后就不能正常跳转了"
                        onChange={e => {
                            this.setState({
                                isBlocking: e.target.value.length > 0
                            })
                        } }
                        />
                </p>

                <p>
                    <button>提交表单以后就可以正常跳转了</button>
                </p>
            </form>
        )
    }
}