import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../components/Login'
import Dashboard from '../components/Dashboard'

const requireLogin = (history) => {

}

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={props =>
        localStorage.getItem('jwt-cdh') ? ( // eslint-disable-line no-undef
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

const Routes = ({ history }) => (
  <Switch>
    <Route exact path='/login' component={Login} />
    <PrivateRoute exact path='/' component={Dashboard} onEnter={requireLogin(history)} />
    <PrivateRoute exact path='*' component={Dashboard} />
  </Switch>
)

export default Routes
