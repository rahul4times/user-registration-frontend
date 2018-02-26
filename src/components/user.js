import React, { Component } from 'react';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';

class User extends Component{
  render(){
    const user = this.props.user;
    return(
      <div>
        <Card>
          <CardHeader>{user.fname} {user.lname}</CardHeader>
          <CardBody>
            <CardText>First Name: {user.fname} </CardText>
            <CardText>Last name: {user.lname}</CardText>
            <CardText>Email: {user.email} </CardText>
            <CardText>Phone: {user.phone}</CardText>
            <CardText>Date of Birth: {user.dob} </CardText>
            <CardText>Social Security No: {user.ssn}</CardText>
            <CardText>Address: {user.address} {user.city} {user.state} {user.zip}</CardText>
            <button type="button" className="btn btn-warning">Edit</button>
            <button type="button" className="btn btn-danger">Delete</button>
          </CardBody>
        </Card>
        <br/>
      </div>

    );
  }
}
export default User;
