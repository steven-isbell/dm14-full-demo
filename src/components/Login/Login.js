import React, { Fragment } from 'react';

const Login = () => (
  <Fragment>
    <a href={process.env.REACT_APP_LOGIN}>
      <button>Login</button>
    </a>
  </Fragment>
);

export default Login;
