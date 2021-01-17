import React from "react";
import "./LoginForm.css";

export default function Index(){


    return<form>

        <label htmlFor='userName'>Username</label>
        <input name="userName" type="text"/>
        <label htmlFor='passWord'>Password</label>
        <input name="passWord" type="password"/>
        <input type="submit"/>
        </form>;
}