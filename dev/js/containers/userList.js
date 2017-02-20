import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions';

class UserList extends Component {
  _renderList() {
    return this.props.users.map((user ,index) => {
        return (
          <li key={user.id}>{user.first}</li>
        );
    });
  }
  render() {
    return (
      <ul>
        {
          this._renderList()
        }
      </ul>
  )
 }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UserList);
