import "./RegisterForm.css";
import React from "react";
import {useForm} from "react-hook-form";
import {IoWarningOutline} from "react-icons/all";



export default function RegisterForm(){
    const {register,handleSubmit,errors} =useForm();
function onSubmit(data){
    console.log(data);
}
return <form className="registerContainer" onSubmit={handleSubmit(onSubmit)}>


    <label htmlFor='userName'>Username</label>
    <input name="userName" type="text" ref={register({required : true})}/>
    {errors.userName && errors.userName.type === "required" &&
    (<p><IoWarningOutline/> This field is required!</p>)}

    <label htmlFor='password'>Password</label>
    <input name="password" type="password" ref={register({required : true})}/>
    {errors.password && errors.password.type === "required" &&
    (<p><IoWarningOutline/> Password is required!</p>)}

    <label htmlFor='email'>Email</label>
    <input name="email" type="email" ref={register({required : true})}/>
    {errors.email && errors.email.type === "required" &&
    (<p><IoWarningOutline/> Email is required!</p>)}

    <input type="submit"/>

</form>;
}