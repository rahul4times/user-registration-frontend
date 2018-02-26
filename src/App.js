import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getUsers } from './actions/users';

import NavBar from './components/navbar';
import Users from './components/users';
import NewUser from './components/newuser';
import EditUser from './components/edituser';

class App extends Component {

  componentDidMount(){
    this.props.getUsers();
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Users} />
          <Route path="/new" component={NewUser} />
          <Route path="/edit" component={EditUser} />
        </div>
    </Router>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    getUsers: bindActionCreators(getUsers, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
