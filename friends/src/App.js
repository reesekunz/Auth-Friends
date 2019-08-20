import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import FormikLoginForm from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

import FormikAddFriendForm from "./components/AddFriends";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="links">
        <Link to="/login">Login</Link>

        <Link to="/addfriends">Add Friend</Link>
        </div>
        <Route path="/login" component={FormikLoginForm} />

        <PrivateRoute exact path="/addfriends" component={FormikAddFriendForm} />
        {/* <PrivateRoute path="/anotherRoute" component={SomeOtherComponent} /> */}
      </div>
    </Router>
  );
}

export default App;
