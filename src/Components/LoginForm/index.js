import React from "react";
import "./LoginForm.css";
import {useForm} from "react-hook-form";
import { IoWarningOutline} from "react-icons/all";

export default function LoginForm(){
    const {register,handleSubmit,errors} =useForm();


    function onSubmit(data){
        console.log(data);
    }
    return <form className="loginContainer" onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor='userName'>Username</label>
        <input name="userName" type="text" ref={register({required : true})}/>
        {errors.userName && errors.userName.type === "required" &&
        (<p><IoWarningOutline/> This field is required!</p>)}

        <label htmlFor='passWord'>Password</label>
        <input name="passWord" type="password" ref={register({required : true})}/>
        {errors.passWord && errors.passWord.type === "required" &&
        (<p><IoWarningOutline/> Password is required!</p>)}
        <input type="submit"/>
        </form>;
}