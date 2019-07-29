import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../components/Login'
import Projects from '../components/Projects'

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
    <PrivateRoute exact path='/' component={Projects} onEnter={requireLogin(history)} />
    <PrivateRoute exact path='*' component={Projects} />
  </Switch>
)

export default Routes
