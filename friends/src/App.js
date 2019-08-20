import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import FormikLoginForm from './components/Login';
import PrivateRoute from './components/PrivateRoute';

import ViewFriends from './components/ViewFriends';


function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/viewfriends">View Private Friends</Link>
          </li>
        </ul>
        <Route path="/login" component={FormikLoginForm} />
        <PrivateRoute exact path="/viewfriends" component={ViewFriends} />
        {/* <PrivateRoute path="/anotherRoute" component={SomeOtherComponent} /> */}
      </div>
    </Router>
  );
}

export default App;
