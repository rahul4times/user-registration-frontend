import React, { Component } from 'react';
import NewUserForm from './new_user_form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createNewUser } from '../actions/users';
class NewUser extends Component {

  submit = values => {
      // print the form values to the console
    console.log("++++", values)
    this.props.createNewUser(values);
  }

  render() {
    console.log("Props here: ", this.props);
    return (
      <div className="container">
        <NewUserForm onSubmit={this.submit} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    createNewUser: bindActionCreators(createNewUser, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(NewUser);
