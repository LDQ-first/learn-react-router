import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import First from './First';



const Index = () => (
    <Router>
        <div>
            <h2>React-Router</h2>
            <ul>
                <li><Link to='/'>默认</Link></li>
                <li><Link to='/First'>基本使用</Link></li>
            </ul>

            <Route exact path='/'/>
            <Route path='/First' component={First}/>
        </div>
    </Router>
) 



ReactDOM.render(
    <Index />, 

document.getElementById('root'));

