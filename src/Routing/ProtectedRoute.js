import {useAuthState} from "../Components/Context/AuthContext";
import {Redirect, Route} from "react-router-dom";
import React from "react";

export default function ProtectedRoute({children,...rest }) {

    const {isAuthenticated}= useAuthState();

    return(
        <Route  {...rest} render={() => {
            return isAuthenticated ? children : <Redirect to="/Login"/>
        }}/>
            );
            }
