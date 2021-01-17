import React from "react";
import "./LoginForm.css";
import {useForm} from "react-hook-form";

export default function LoginForm(){
    const {register,handleSubmit} =useForm();


    function onSubmit(data){
        console.log(data);
    }
    return <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor='userName'>Username</label>
        <input name="userName" type="text" ref={register}/>
        <label htmlFor='passWord'>Password</label>
        <input name="passWord" type="password" ref={register}/>
        <input type="submit"/>
        </form>;
}