import React from "react";
import { Route, Redirect } from "react-router";

// requirements:
// 1. It has the same API as `<Route />` - Have the same props
// 2. It renders a <Route /> and passes all the props through to it.

// This code for Private Route Component can be reused in every project:
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;

// ({ component, ...rest }) is shorthand for:

// const props = {
//   component: {},
//   exact: true,
//   path: '/protected',
//   render: null,
// }

// const component = props.component;
// const rest = {
//   exact: props.exact,
//   path: props.path,
//   render: props.render
// }
