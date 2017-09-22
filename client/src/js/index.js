import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import 'antd/dist/antd.css';

import BackendIndex from './views/backendIndex';
import BackendLogin from './views/backendLogin';
import HomePage from './views/index';

class Index extends Component {
  constructor(props){
    super(props);
    window.hostIP = "http://172.16.50.201:9527";
  }
  componentWillMount(){
    document.title = 'teachWeb';
  };
  render(){
    return(
      <div style={{height:"100%"}}>
        <Router>
          <Switch>
            <Redirect exact from='/' to='/index'/>
            <Route exact path="/index" component={HomePage} />
            <Redirect exact from='/manage' to='/manage/index'/>
            <Route exact path="/manage/index" component={BackendIndex} />
            <Route exact path="/manage/login" component={BackendLogin} />
          </Switch>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<Index/>,document.getElementById('container'));
exports = hostIP;
