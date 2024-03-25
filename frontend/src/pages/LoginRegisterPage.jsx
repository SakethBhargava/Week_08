import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

const LoginRegisterPage = () => {
  return (
    <div>
      <h2>Login or Register</h2>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
};

export default LoginRegisterPage;
