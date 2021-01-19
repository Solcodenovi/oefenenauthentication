import React from "react";
import "./LoginForm.css";
import {useForm} from "react-hook-form";
import { IoWarningOutline} from "react-icons/all";
import axios from "axios";

export default function LoginForm(){
    const {register,handleSubmit,errors} =useForm();

    async function onSubmit (data) {
        console.log("Wat is er ingevuld", data);
        try{
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

    // function onSubmit(data){
    //     console.log(data);
    // }
    return <form className="loginContainer" onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor='userName'>Username</label>
        <input name="username" type="text" ref={register({required : true})}/>
        {errors.username && errors.username.type === "required" &&
        (<p><IoWarningOutline/> This field is required!</p>)}

        <label htmlFor='passWord'>Password</label>
        <input name="password" type="password" ref={register({required : true})}/>
        {errors.password && errors.password.type === "required" &&
        (<p><IoWarningOutline/> Password is required!</p>)}
        <input type="submit"/>
        </form>;
}