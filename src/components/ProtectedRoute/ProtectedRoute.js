import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

const ProtectedRoute = ({ component: Component, ...props }) => {
  console.log(props.isLoading);
  return (
    <Route>
      {props.isLoading ? (
        <Preloader />
      ) : props.loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to='/' />
      )}
    </Route>
  );
};

export default ProtectedRoute;
