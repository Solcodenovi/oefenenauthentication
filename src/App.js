
import React from "react";
// import './App.css';
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Account from "./Pages/Account";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
              <li>
                <Link to="/Login">Log in</Link>
              </li>
              <li>
                <Link to="/Account">Account</Link>
              </li>
            </ul>
          </nav>


          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
               <Route path="/Register">
                 <Register/>
               </Route>
            <Route path="/Login">
              <Login/>
            </Route>
            <Route path="/Account">
              <Account/>
            </Route>
              <Route path="/">
                <h1>Error 404 not found.</h1>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}






