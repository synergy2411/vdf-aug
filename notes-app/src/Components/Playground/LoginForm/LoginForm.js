import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const LoginForm = () => {
    const inputEmailRef = useRef();
    const inputPasswordRef = useRef();
    const [enteredEmail, setEnteredEmail] = useState("")

    const schema = yup.object().shape({
        email : yup.string().email().required(),
        password : yup.string().required()
    })

    const {register, handleSubmit, formState : { errors } } = useForm({
        resolver : yupResolver(schema)
    });

    const submitHandler = ({email, password}) => {
        console.log("DATA - ", email, password);
        // console.log("REF - Email - ", inputEmailRef.current.value )
        // console.log("Password - ", inputPasswordRef.current.value )
        // inputEmailRef.current.value="";
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <label>Email : </label>
                {/*  <input type="email" ref={inputEmailRef} 
                    value={enteredEmail} 
                    onChange = {changeHandler}/> <br/> */}
                {/* <input type="email" ref={inputEmailRef}/> <br/> */}
                <input type="email" {...register("email")}/> <br/>
                    {/*errors.email && <span>Some problem with email</span>*/}
                    {errors.email?.message}

                <br/>
                <label>Password : </label>
                <input type="password" {...register("password")}/> 
                    {errors.password?.message}
                <br/>
                <input type="submit" value="Submit Form"/>
            </form>
        </div>
    )
}

export default LoginForm;