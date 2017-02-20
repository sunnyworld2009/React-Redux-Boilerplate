import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserList extends Component {
  render() {
    return (
      <ul>
        <li>One</li>
        <li>One</li>
        <li>One</li>
        <li>One</li>
      </ul>
  )
 }
}

function mapStateToProps() {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UserList);
