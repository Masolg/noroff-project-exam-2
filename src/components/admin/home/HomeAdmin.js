import React from 'react';
import '../../../style/homeAdmin.scss';
import Illustration from '../../../components/Illustration';
import Footer from '../../../components/visitor/Footer';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
    username: yup.string()
        .required("Please enter your name")
        .min(3, "Username needs to be at least 3 characters long."),
    password: yup.string()
        .required("Please enter password")
        .min(6, "Password needs to be at least 6 characters long.")
}); 

function HomeAdmin() {  
    
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });
    
    let history = useHistory();

    function handleClick(e){
        console.log(e);
        history.push("/adminstart");
    }


    return (
        <>
            <div className="homeAdmin">
                <h2>Log In</h2>
                <div className="homeAdmin__login">
                    <label className="login__label">Username</label><br />
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Enter Username" 
                        id="username" 
                        ref={register}
                        />
                </div>
                <span className="homeAdmin__error">{errors.username && <p>{errors.username.message}</p>}</span>

                <div className="homeAdmin__login">
                    <label className="login__label">Password</label><br />
                    <input type="password" 
                        name="password" 
                        placeholder="Enter Password" 
                        id="password" 
                        ref={register}
                        />
                </div>
                <span className="homeAdmin__error">{errors.password && <p>{errors.password.message}</p>}</span>


                <div className="homeAdmin__button">
                    <label className="login__label">&nbsp;</label>
                    <input type="button" value="Log In" id="loginButton" onClick={handleSubmit(handleClick)} />
                </div>   

            </div>
            <Illustration />     
            <Footer />     
        </>
    );
}

export default HomeAdmin;