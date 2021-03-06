import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom'
import './index.css'
import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import Fifth from './Fifth'
import Sixth from './Sixth'
import Seventh from './Seventh'
import Eighth from './Eighth'
import Ninth from './Ninth'
import Tenth from './Tenth'
import Eleventh from './Eleventh'
import Twelfth from './Twelfth'


const Index = () => (
    <Router>
        <div>
            <h2>React-Router</h2>
            <ul className="examples">
                <li><Link to='/'>默认</Link></li>
                <li><Link to='/First'>基本使用</Link></li>
                <li><Link to='/Second'>URL参数</Link></li>
                <li><Link to='/Third'>认证</Link></li>
                <li><Link to='/Fourth'>自定义链接</Link></li>
                <li><Link to='/Fifth'>阻止导航</Link></li>
                <li><Link to='/Sixth'>未匹配（404）</Link></li>
                <li><Link to='/Seventh'>路径递归</Link></li>
                <li><Link to='/Eighth'>侧边栏</Link></li>
                <li><Link to='/Ninth'>过度动画</Link></li>
                <li><Link to='/Tenth'>模糊匹配</Link></li>
                <li><Link to='/Eleventh'>路由配置</Link></li>
                <li><Link to='/Twelfth'>模拟画廊</Link></li>
            </ul>

            <Switch>
                <Route exact path='/'/>
                <Route path='/First' component={First}/>
                <Route path='/Second' component={Second}/>
                <Route path='/Third' component={Third}/>
                <Route path='/Fourth' component={Fourth}/>
                <Route path='/Fifth' component={Fifth}/>
                <Route path='/Sixth' component={Sixth}/>
                <Route path='/Seventh' component={Seventh}/>
                <Route path='/Eighth' component={Eighth}/>
                <Route path='/Ninth' component={Ninth}/>
                <Route path='/Tenth' component={Tenth}/>
                <Route path='/Eleventh' component={Eleventh}/>
                <Route path='/Twelfth' component={Twelfth}/>
                <Route component={NoMatch}/>
            </Switch>
        </div>
    </Router>
) 

const NoMatch = ({ location }) => (
  <div>
    <h3>无法匹配 <code>{location.pathname}</code></h3>
  </div>
)

ReactDOM.render(
    <Index />, 
document.getElementById('root'));

