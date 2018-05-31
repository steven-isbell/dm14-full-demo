import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getUser } from '../../ducks/userReducer';

class Home extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div>
        {!this.props.isAuthed ? (
          <p>Not Logged In</p>
        ) : (
          <p>{JSON.stringify(this.props.user)}</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ ...user });

export default connect(mapStateToProps, { getUser })(Home);
