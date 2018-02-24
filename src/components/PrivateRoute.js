import React from 'react'
import { isAuthenticated } from 'utils/auth'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({component: Component, redirectTo, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props => isAuthenticated()
          ? (<Component {...props} />)
          : (<Redirect 
              to={{
                pathname: redirectTo,
                state: { from: props.location }
              }}
            />)
        }
      />
    )
  }

  export default PrivateRoute