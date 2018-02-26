import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './user';

class Users extends Component {
  render(){

    const user = this.props.users.map((user, i) => {
      return(
        <User key={i} user={user}/>
      )
    });

    return(
      <div className="container">
        <h1>Users</h1>
        {user}
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    users: state.users
  }
}
export default connect(mapStateToProps, null)(Users)
