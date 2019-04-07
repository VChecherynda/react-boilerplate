import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SignIn from '../../containers/SignInContainer';
import SignUp from '../../containers/SignUpContainer';
import ResetPassword from '../../containers/ResetPasswordContainer';

const app = props => {

  let routes = (
    <Switch>
      <Route path="/sign-in" exact component={SignIn}/>
      <Route path="/sign-up" exact component={SignUp}/>
      <Route path="/reset-password" exact component={ResetPassword}/>
      <Redirect from="/" to="/sign-in" />
    </Switch>
  )

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/main" exact component={() => <h1>Main</h1>}/>
        <Redirect from="/" to="/main" />
      </Switch>
    );
  }

  return routes;
}

export default app;