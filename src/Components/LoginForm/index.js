import React from "react";
import "./LoginForm.css";
import {useForm} from "react-hook-form";
import {IoWarningOutline} from "react-icons/all";
import axios from "axios";
import {AuthContext,useAuthState} from "../Context/AuthContext";
import {Link, useHistory} from 'react-router-dom';
import{useEffect, useContext} from 'react';



export default function LoginForm() {

    const {login} = useContext(AuthContext);
    const {isAuthenticated} = useAuthState();

    const {register, handleSubmit, errors} = useForm();


    // state voor gebruikersfeedback

    // const [error, setError] = useState('');

    // react-router dingen
    const history = useHistory();

    // Deze functie wordt elke keer afgevuurd als isAuthenticated (uit context) veranderd
    useEffect(() => {
        // als hij de waarde true heeft, DAN sturen we de gebruiker door!
        if (isAuthenticated === true) {
            history.push('/Account');
        }
    }, [isAuthenticated]);


    async function onSubmit(data) {

        // setError('');
        console.log("Wat is er ingevuld", data);
        try {
            const response = await axios.post(`https://polar-lake-14365.herokuapp.com/api/auth/signin`,
                {
                    username: data.username,
                    password: data.password,

                }
            )
            login(response.data);
        } catch (e) {
            // console.error(error);
            // setError("inloggen mislukt");
        }

    }


    return <form className="loginContainer" onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor='username'>Username</label>
        <input name="username" type="text" ref={register({required: true})}/>
        {errors.username && errors.username.type === "required" &&
        (<p><IoWarningOutline/> This field is required!</p>)}

        <label htmlFor='password'>Password</label>
        <input name="password" type="password" ref={register({required: true})}/>
        {errors.password && errors.password.type === "required" &&
        (<p><IoWarningOutline/> Password is required!</p>)}

        {/*<label htmlFor='email'>Email</label>*/}
        {/*<input name="email" type="email" ref={register({required : true})}/>*/}
        {/*{errors.email && errors.email.type === "required" &&*/}
        {/*(<p><IoWarningOutline/> Email is required!</p>)}*/}
        <input type="submit"/>

            {/*<p>{error && <p>{error}</p>} </p>*/}
            <p>Heb je nog geen account? <Link to="/Register">Registreer</Link> je dan eerst.</p>


    </form>



}
