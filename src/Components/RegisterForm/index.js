import "./RegisterForm.css";
import React from "react";
import {useForm} from "react-hook-form";
import {IoWarningOutline} from "react-icons/all";
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useState} from "react";


export default function RegisterForm(){
    const {register,handleSubmit,errors} =useForm();
// function onSubmit(data){
//     console.log(data);


    // state voor gebruikers-feedback

    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    // state voor gebruikers-feedback
    const [createUserSuccess, setCreateUserSuccess] = useState(false);

    async function onSubmit(data) {
        // Dit alleen omdat we controlled components gebruiken, React-hook-form hoeft dit niet
        toggleLoading(true);
        setError('');

        try {
            // 1. Gebruik de data uit het formulier om een gebruiker aan te maken (check documentatie!)
            const response = await axios.post('https://polar-lake-14365.herokuapp.com/api/auth/signup', {
                username: data.username,
                email: data.email,
                password: data.password,
                role: ["user"],
            });

            // // 2. Kijk goed wat je terugkrijgt!
            console.log(response.data);


            if (response.status === 200) {
                // 3. Als het is gelukt, willen we in DIT component opslaan dat het gelukt is
                setCreateUserSuccess(true);
            }
        } catch(e) {
            console.error(e);
            if (e.message.includes('400')) {
                setError('Er bestaat al een account met deze gebruikersnaam');
            } else {
                setError('Er is iets misgegaan bij het verzenden. Probeer het opnieuw');
            }
        }

}
return (
    <>
    {/*4. Als het gelukt is, willen we een berichtje laten zien in de HTML, zoals:*/}
    {createUserSuccess === true && (
        <h2 className="message-success">Registration successful! 🥳 Click <Link to="/Login">here</Link> to log in!</h2>
    )}

    <form className="registerContainer" onSubmit={handleSubmit(onSubmit)}>


    <label htmlFor='username'>Username</label>
    <input name="username" type="text" ref={register({required : true})}/>
    {errors.username && errors.username.type === "required" &&
    (<p><IoWarningOutline/> This field is required!</p>)}

    <label htmlFor='password'>Password</label>
    <input name="password" type="password" ref={register({required : true})}/>
    {errors.password && errors.password.type === "required" &&
    (<p><IoWarningOutline/> Password is required!</p>)}

    <label htmlFor='email'>Email</label>
    <input name="email" type="email" ref={register({required : true})}/>
    {errors.email && errors.email.type === "required" &&
    (<p><IoWarningOutline/> Email is required!</p>)}

    <input type="submit"    disabled={loading}  />
        {/*Zorg dat de gebruiker niet nog een keer kan klikken terwijl we een request maken*/}

        {error && <p>{error}</p>}
</form>
        <p>If you already have an account click on <Link to="/Login">login</Link> to be redirected to our Login Page.</p>
        </>
 );
}