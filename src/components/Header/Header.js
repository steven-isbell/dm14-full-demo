import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <header
        className="App-header"
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '100vw'
        }}
      >
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/login">
          <p>Login</p>
        </Link>
        <Link to="/shop">
          <p>Shop</p>
        </Link>
        <a href={process.env.REACT_APP_LOGOUT}>Logout</a>
        <p>Cart: {this.props.cart.totalQuantity}</p>
      </header>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Header);
