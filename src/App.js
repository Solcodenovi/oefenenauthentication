
import React from "react";
// import './App.css';
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Account from "./Components/Pages/Account";
import HomeBackground from "./Components/Home";
import {useAuthState} from "./Components/Context/AuthContext";
import ProtectedRoute from "./Routing/ProtectedRoute";



import {
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function App() {

        const {isAuthenticated}= useAuthState();

  return (
  <>
        <div>
          <nav>
            <HomeBackground/>
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

            <ProtectedRoute exact path= "/Account">
           <Account />
            </ProtectedRoute>


              <Route path="/">
                <h1>Error 404 not found.</h1>
            </Route>

          </Switch>
        </div>


        </>

  );
}






