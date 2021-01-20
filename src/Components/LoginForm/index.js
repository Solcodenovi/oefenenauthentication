import React from "react";
import "./LoginForm.css";
import {useForm} from "react-hook-form";
import {IoWarningOutline} from "react-icons/all";
import axios from "axios";
import {AuthContext,useAuthState} from "../Context/AuthContext";
import {Link, useHistory} from 'react-router-dom';
import{useEffect, useContext} from 'react';




export default function LoginForm(){
    const {register,handleSubmit,errors} =useForm();

    async function onSubmit (data) {
        console.log("Wat is er ingevuld", data);
        try {
            const response = await axios.post(`https://polar-lake-14365.herokuapp.com/api/auth/signin`,
                {
                    username: data.username,
                    password: data.password,
                }
            )
            console.log("Wat ontvang ik", response);
        } catch (error){
        }
    }
    // context-functies
    const { login } = useContext(AuthContext);
    const { isAuthenticated } = useAuthState();


    // react-router dingen
    const history = useHistory();

    // Deze functie wordt elke keer afgevuurd als isAuthenticated (uit context) veranderd
    useEffect(() => {
        // als hij de waarde true heeft, DAN sturen we de gebruiker door!
        if (isAuthenticated === true) {
            history.push('/profile');
        }
    }, [isAuthenticated]);



    return <form className="loginContainer" onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor='username'>Username</label>
        <input name="username" type="text" ref={register({required : true})}/>
        {errors.username && errors.username.type === "required" &&
        (<p><IoWarningOutline/> This field is required!</p>)}

        <label htmlFor='password'>Password</label>
        <input name="password" type="password" ref={register({required : true})}/>
        {errors.password && errors.password.type === "required" &&
        (<p><IoWarningOutline/> Password is required!</p>)}
        <input type="submit"/>
        <p>Heb je nog geen account? <Link to="/Register">Registreer</Link> je dan eerst.</p>
        </form>;
}
